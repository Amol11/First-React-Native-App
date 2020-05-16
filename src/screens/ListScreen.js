import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend 1', age: 15 },
        {name: 'Friend 2', age: 33 },
        {name: 'Friend 3', age: 29 },
        {name: 'Friend 4', age: 27 },
        {name: 'Friend 5', age: 23 },
        {name: 'Friend 6', age: 42 },
        {name: 'Friend 7', age: 16 },
        {name: 'Friend 8', age: 11 },
    ];
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(friend) => friend.name} 
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age  {item.age}</Text>;
        }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginLeft: 8
    }
});

export default ListScreen;