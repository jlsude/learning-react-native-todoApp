import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList,
		TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';



const sandbox = () => {
    return (  
        <View style = {styles.container}>
            <Text style = {styles.boxOne}>one</Text>
            <Text style = {styles.boxTwo}>two</Text>
            <Text style = {styles.boxThree}>three</Text>
            <Text style = {styles.boxFour}>four</Text>

        </View>
    );
}
 
export default sandbox;

const styles = StyleSheet.create({
    
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        flex: 2,
        backgroundColor: 'gold',
        padding: 20,
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 30,
    },
    boxFour: {
        flex: 3,
        backgroundColor: 'skyblue',
        padding: 40,
    },


})