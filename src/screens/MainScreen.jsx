import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="Go to Home screen"
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ListScreen')}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Go to List Screen</Text>
        </TouchableOpacity>
        <Button
          title="Go to Image screen"
          onPress={() => navigation.navigate('ImageScreen')}
        />
        <Button
          title="Go to Counter screen"
          onPress={() => navigation.navigate('CounterScreen')}
        />
        <Button
          title="Go to Color screen"
          onPress={() => navigation.navigate('ColorScreen')}
        />
        <Button
          title="Go to Sqaure screen"
          onPress={() => navigation.navigate('SquareScreen')}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    backgroundColor: '#1e90ff',
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {color: 'white', fontWeight: 'bold'},
});
export default MainScreen;
