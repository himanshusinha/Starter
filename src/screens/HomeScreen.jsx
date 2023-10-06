import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  const name = 'Himanshu Sinha';
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.textOneStyle}>
          Getting started with react native !!!!
        </Text>
        <Text style={styles.textTwoStyle}>My Name is {name}</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textOneStyle: {
    fontSize: 30,
  },
  textTwoStyle: {
    fontSize: 22,
  },
});
export default HomeScreen;
