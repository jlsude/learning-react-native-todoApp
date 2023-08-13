import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList,
		TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

const Header = () => {
    return (  
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}
 
export default Header;


const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});