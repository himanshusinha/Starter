import {View, Text} from 'react-native';
import React, {useState} from 'react';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const COLOR = 50;
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        color={'Red'}
        onIncrement={() => setRed(red + COLOR)}
        onDecrement={() => setRed(red - COLOR)}
      />
      <ColorCounter
        color={'Green'}
        onIncrement={() => setGreen(green + COLOR)}
        onDecrement={() => setGreen(green - COLOR)}
      />
      <ColorCounter
        color={'Blue'}
        onIncrement={() => setBlue(blue + COLOR)}
        onDecrement={() => setBlue(blue - COLOR)}
      />

      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
