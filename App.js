import { StatusBar } from 'expo-status-bar';
import React, { useState }from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './components/header';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';


export default function App() {
  const [Todos, setTodos] = useState([
    { text : 'go shopping', key : '1'},
    { text : 'code react native', key : '2'},
    { text : 'deploy app!', key : '3'}
  ])

  const addTodo = (todo) => {
    console.log(todo);
    var newTodo = {text: todo, key : Math.random().toString()};
    var newTodoList = [newTodo, ...Todos];
    setTodos(newTodoList);
    console.log(Todos);

    
  }
  const deleteTodo = (todo)=> {
    setTodos(Todos.filter(item => {
      return item.key !== todo.key;
    }))
  }
  return (
    <TouchableWithoutFeedback onPress = {()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style = {styles.header}>
            <Header />
        </View>
        <View style = {styles.text}>
          <AddTodo addTodo = {addTodo}/>
        </View>
        
          <View>
            <TodoList deleteTodo = {deleteTodo} Todos = {Todos} />
          </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
