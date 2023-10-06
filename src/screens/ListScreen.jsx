import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';

const ListScreen = () => {
  const friendsList = [
    {
      id: '1',
      name: 'Friends 1',
    },
    {
      id: '2',
      name: 'Friends 2',
    },
    {
      id: '3',
      name: 'Friends 3',
    },
    {
      id: '4',
      name: 'Friends 4',
    },
    {
      id: '5',
      name: 'Friends 5',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={friendsList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
