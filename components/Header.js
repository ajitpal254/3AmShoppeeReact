import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const Header = () => {
    return(

        <View style={styles.header}>
            <Image style={styles.img} source = {require('../image/NewLogo.png')}/>


            <View style={styles.view1}>

            <Text style={styles.text1}>Home</Text>
            <Text style={styles.text1}>About</Text>
            <Text style={styles.text1}>Products</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 70,
        padding: 15,
        backgroundColor: 'aquamarine',
    },
    view1: {
        flexDirection:'row',
        color: '#fff',
        fontSize: 23,

        paddingLeft:1100,

    },
    text1:{
        paddingLeft: 10,
        flexDirection: 'row',
        color: '#fff',
        fontSize: 23,

        textAlign: 'right',
    },
    text:{
        color: '#fff',
        fontSize: 14,
        paddingRight:10,
        textAlign: 'left',
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 50/2,
    }
});
export default Header;

