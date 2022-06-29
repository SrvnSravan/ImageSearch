import React, {useState, useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import debounce from 'lodash.debounce';
import styles from './styles';
import Card from '../../components/cards/card';
import {getImages} from '../../services/api/get-images/get-images';
import SearchBar from '../../components/search-bar/search-bar';

const Home = props => {
  const {navigation} = props;
  const [searchKeyWord, setSearchKeyword] = useState('');
  const [searchData, setSearch] = useState([]);

  const fetchData = async searchText => {
    const queryParameters = {
      text: searchText,
    };
    const result = await getImages(queryParameters);
    setSearch(result.photos?.photo);
  };

  const callSearch = text => {
    setSearchKeyword(text);
    searchOptimize(text);
  };

  const searchOptimize = useCallback(
    debounce(value => fetchData(value), 500),
    [],
  );

  const renderCard = ({item}) => {
    let imgUrl = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;
    const showDetail = () => {
      navigation.navigate('Detail', {cardData: item, imageUrl: imgUrl});
    };
    return (
      <Card onPress={() => showDetail(item)} url={imgUrl} title={item.title} />
    );
  };

  const renderEmpty = ({item}) => {
    return (
      <Text allowFontScaling={false} style={styles.emptyTextStyle}>
        No Images...
      </Text>
    );
  };

  return (
    <View>
      <SearchBar callSearch={callSearch} searchKeyWord={setSearchKeyword} />
      <FlatList
        data={searchData}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        extraData={useState}
        initialNumToRender={10}
        windowSize={10}
        maxToRenderPerBatch={20}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
};

export default Home;
