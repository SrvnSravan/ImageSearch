import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './StylesDetail';

const Detail = ({route}) => {
  const {cardData, imageUrl} = route.params;
  const {title} = cardData;

  return (
    <ScrollView style={styles.container}>
      <FastImage
        source={{uri: imageUrl}}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.cardImageStyle}
      />
      <View style={styles.lowerViewStyle}>
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={styles.titleStyle}>
          {title}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Detail;
