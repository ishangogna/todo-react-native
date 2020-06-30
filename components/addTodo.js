import React , {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';


export default function AddTodo({addTodo}) {
    const [text, setText] = useState('');
    const handleChangeText = (val) => {
        setText(val);
    }

    return (
        <View style = {styles.todoContainer}>
            <TextInput
                onChangeText = {handleChangeText} 
                style = {styles.todo}
                placeholder = 'Add a todo..'
            />
            <Button onPress={() => {addTodo(text)}} title = 'Add'/>
        </View>
    )
}

const styles = StyleSheet.create({
    todo : {
        borderBottomWidth :1,
        borderBottomColor: 'grey',
        fontSize : 20,
        
    },
    todoContainer : {
        marginTop : 50,
        padding: 20,
    }
});