import {View, Text, Button} from 'react-native';
import React from 'react';

const ColorCounter = ({color, onIncrement, onDecrement}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increment ${color}`} onPress={() => onIncrement()} />
      <Button title={`Decrement ${color}`} onPress={() => onDecrement()} />
    </View>
  );
};

export default ColorCounter;
