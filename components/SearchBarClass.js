import React from 'react';
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';

const SearchBarClass = () =>{
    return(
        <View style ={styles.container}>
            <TextInput style={styles.input} placeholder="Type to search.."></TextInput>

            <TouchableOpacity activeOpacity={0.95} style={styles.button}>
                <Text style={styles.text}>Search</Text>
            </TouchableOpacity>
        </View>

    );
}
const styles = StyleSheet.create({
    container:{

        flexDirection: 'row',
        paddingLeft: 1250,
        textAlign: 'right',
    },
    input: {
        backgroundColor: 'white',
        borderWidth:1,
        height:30,
        width: 150,
        fontColor: 'black',
        fontSize: 16,

    },
    button: {
        borderWidth:1,
        flexDirection: 'row',
        height: 30,
        width: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

        elevation:3,
    },
})
export default SearchBarClass;
