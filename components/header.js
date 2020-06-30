import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function header() {
    return(
        <View style = {styles.header}>
            <Text style = {styles.text}>Todo App</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        height: 80,
    },
    text : {
        textAlign : 'center',
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
        marginTop : 20,
        
    }
});