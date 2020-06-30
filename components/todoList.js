import React, { useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function TodoList({Todos, deleteTodo}) {
    return(
        <View style = {styles.listContainer}>
            <FlatList 
                style = {styles.list}
                data = {Todos}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress = {()=>deleteTodo(item)}>
                    <Text style = {styles.listItem}>{item.text}</Text>
                    </TouchableOpacity>
                )}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        padding : 20,
    },
    listItem : {
        borderWidth : 1,
        marginTop : 10,
        padding: 5,
        fontSize : 15,
        borderRadius : 10,
        borderColor :'lightgrey',
        
    }
    
    
})