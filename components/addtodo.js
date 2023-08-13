import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList,
        TouchableOpacity } from 'react-native';

const addtodo = ({submitHandler}) => {
    const [text, setText] = useState('')

    const changeHandler = (val) => {

        setText(val)
    }

    return (  
        <View>
            <TextInput 
                placeholder='new todo...'
                value={text}
                onChangeText={changeHandler}
                style={styles.input}
            />
            <Button onPress={() => {
                submitHandler(text)
                setText('')
            }} title='add todo' color ='coral'/>

        </View>
    );
}
 
export default addtodo;

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',

    }
})
