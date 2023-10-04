import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  const friendsList = [
    {
      id: '1',
      name: 'FriendsList 1',
      age: 20,
    },
    {
      id: '2',
      name: 'FriendsList 2',
      age: 30,
    },
    {
      id: '3',
      name: 'FriendsList 3',
      age: 40,
    },
    {
      id: '4',
      name: 'FriendsList 4',
      age: 35,
    },
    {
      id: '5',
      name: 'FriendsList 5',
      age: 45,
    },
    {
      id: '6',
      name: 'FriendsList 6',
      age: 55,
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={{marginTop: 20}}>
        <Text>
          {item.name}-Age-{item.age}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={friendsList}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textOneStyle: {
    fontSize: 26,
    marginTop: 20,
  },
  textTwoStyle: {
    fontSize: 20,
    fontWeight: '300',
  },
});
export default HomeScreen;
