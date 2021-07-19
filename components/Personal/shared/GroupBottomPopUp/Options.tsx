import React from 'react';
import {
  View,
  Text, FlatList,
  Pressable
} from 'react-native';

const data = [
  {id: 1, name: 'Message'},
  {id: 2, name: 'Info'},
  {id: 3, name: 'Make Group Admin'},
];

export function Options(props) {
  return (
    <View>
      <FlatList
        style={{
          marginBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={item => {
          return (
            <Pressable
              style={{
                height: 50,
                flex: 1,
                alignItems: 'flex-start',
              }}
              onPress={() => props.performAction(item.item)}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'normal',
                  color: '#182E44',
                }}>
                {item.item.name}
              </Text>
            </Pressable>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              opacity: 0.1,
              backgroundColor: '#182E44',
              height: 1,
            }} />
        )}
        contentContainerStyle={{
          paddingBottom: 40,
        }} />
    </View>
  );
}
