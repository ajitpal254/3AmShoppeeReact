import React from 'react';
import {View, Text,StyleSheet,Button,TextInput} from 'react-native';

const SearchBarClass = () =>{
    return(
        <View style ={styles.container}>
            <TextInput style={styles.input} placeholder="Type to search.."></TextInput>
            <Button style={styles.search}>Search</Button>
        </View>

    );
}
const styles = StyleSheet.create({
    container:{

        flexDirection: 'row',
        paddingLeft: 20,
    },
    input: {
        borderWidth:1,
        width: 100,

    },
    search:{
      buttoncolor:'blue',
        width: 100,
    }
})
export default SearchBarClass;
