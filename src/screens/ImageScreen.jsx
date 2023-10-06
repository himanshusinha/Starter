import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import ImageComp from '../components/ImageComp';

const ImageScreen = () => {
  return (
    <SafeAreaView>
      <ImageComp
        imageSource={require('../assets/images/beach.jpg')}
        imageName={'Beach'}
        score={'7'}
      />
      <ImageComp
        imageSource={require('../assets/images/forest.jpg')}
        imageName={'Forest'}
        score={'8'}
      />
      <ImageComp
        imageSource={require('../assets/images/mountain.jpg')}
        imageName={'Mountain'}
        score={'9'}
      />
    </SafeAreaView>
  );
};

export default ImageScreen;
