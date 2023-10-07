import {View, Text, Button} from 'react-native';
import React, {useReducer, useState} from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'decrement':
      return {...state, count: state.count - action.payload};
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <View>
      <Text>{state.count}</Text>
      <Button
        title="increment"
        onPress={() => dispatch({type: 'increment', payload: 1})}
      />
      <Button
        title="decrement"
        onPress={() => dispatch({type: 'decrement', payload: 1})}
      />
    </View>
  );
};

export default CounterScreen;
