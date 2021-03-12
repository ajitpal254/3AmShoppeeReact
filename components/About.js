import React from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';

const About = () =>{
    return (
        <View style={styles.aboutContainer}>
            <View style={styles.ajit}>
                <Image style={styles.user} source = {require('../image/avatar.png')}/>
                <Text style={styles.text1}>Ajit Pal</Text>
            </View>
            <View style={styles.arsh}>
                <Image style={styles.user} source = {require('../image/avatar.png')}/>
                <Text style={styles.text1}>Arshdeep Randhawa</Text>
            </View>
            <View style={styles.ankit}>
                <Image style={styles.user} source = {require('../image/avatar.png')}/>
                <Text style={styles.text1}>Ankit Jain</Text>
            </View>
            <View style={styles.mankirat}>
                <Image style={styles.user} source = {require('../image/avatar.png')}/>
                <Text style={styles.text1}>Mankirat Singh</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    aboutContainer: {
        paddingTop:80,
        flexDirection: 'row',
    },
user: {
    height: 100,
    width: 100,
    borderRadius: 100/2,
},
    ajit:{
        marginLeft:40,
        alignItems: 'center',
    },
    text1: {
        fontSize: 25,
        fontFamily: 'sans-serif',
    },
    arsh:{
        alignItems: 'center',
        marginLeft: 40,
    },
    ankit: {
        alignItems: 'center',
        marginLeft: 40,
    },
    mankirat:{
        alignItems: 'center',
        marginLeft: 40,
    }
})
export default About;
