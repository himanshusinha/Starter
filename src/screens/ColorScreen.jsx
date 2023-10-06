import {View, Text, Button, FlatList} from 'react-native';
import React, {useState} from 'react';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <FlatList
        data={colors}
        renderItem={({item}) => {
          return (
            <View style={{width: 100, height: 100, backgroundColor: item}} />
          );
        }}
      />
    </View>
  );
};
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};
export default ColorScreen;
