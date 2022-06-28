import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './cardStyle';

const Card = ({onPress, url, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardStyle}>
      <FastImage
        source={{uri: url}}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.cardImageStyle}
      />
      <Text
        allowFontScaling={false}
        numberOfLines={1}
        style={styles.titleStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
