import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList,
		TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import React, { useState, useEffect } from 'react';
import Header from './components/header'
import ToDoItem from './components/todoitem'
import AddToDo from './components/addtodo'
import Sandbox from './components/sandbox'


export default function App() {
	const [todos, setTodos] = useState([
		{ text: 'buy coffee', key: '1' },
		{ text: 'create an app', key: '2' },
		{ text: 'play on the switch', key: '3' }
	]);

	const pressHandler = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter(todo => todo.key != key)
		})

		
	}

	const submitHandler = (text) => {
		
		if (text.length > 3) {
			setTodos((prevTodos) => {
				return [
					{ text: text, key: Math.random().toString()},
					...prevTodos
				]
			})
		} else {
			Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
				{text: 'Understood', onPress:() => console.log('alert closed')}])
		}
	}

	return (
		// <Sandbox />
		<TouchableWithoutFeedback onPress={() => {
			Keyboard.dismiss()
		}}>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					{/* to form */}
					<AddToDo submitHandler={submitHandler}/>
					<View style={styles.list}>
						<FlatList
							data = {todos}
							renderItem = {({item}) => {
								return(
									<ToDoItem item = {item} pressHandler= {pressHandler}/>
								)
							}}
						/>


					</View>
				</View>



			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',

	},

	content: {
		flex: 1,
		padding: 40,
	},

	list: {
		flex: 1,
		marginTop: 20,
	}
	







});
