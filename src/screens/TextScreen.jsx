import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View style={{marginHorizontal: 20, marginTop: 20}}>
      <Text style={{marginBottom: 10}}>Enter Name</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          height: 50,
          paddingStart: 10,
        }}
        placeholder="Enter your value"
        value={password}
        onChangeText={e => setPassword(e)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {password.length < 4 ? (
        <Text>Password must be longer than 5 characters </Text>
      ) : null}
    </View>
  );
};

export default TextScreen;
