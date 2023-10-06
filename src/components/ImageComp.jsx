import {View, Text, Image} from 'react-native';
import React from 'react';

const ImageComp = ({imageSource, imageName, score}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={imageSource}
        style={{width: 100, height: 100, margin: 10}}
      />
      <View style={{justifyContent: 'center'}}>
        <Text>{imageName}</Text>
        <Text>Image Score - {score}</Text>
      </View>
    </View>
  );
};

export default ImageComp;
