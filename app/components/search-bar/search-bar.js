import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

const SearchBar = ({callSearch, searchKeyWord}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        value={searchKeyWord}
        placeholder={'Search images...'}
        onChangeText={callSearch}
      />
    </View>
  );
};
export default SearchBar;
