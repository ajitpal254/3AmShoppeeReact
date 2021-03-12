import  React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';


const Product2 = () =>{
    return (
        <View style={styles.products}>
            <View style={styles.product1}>
                <Image style={styles.img} source={require('C:/Users/ajitp/3AmShoppee/image/officePc.jpg') }/>
                <Text style={styles.text1}>Fully Built Office PC CAD 399</Text>
            </View>

            <View style={styles.product2}>
                <Image style={styles.imgKey} source = {require('../image/printer.jpg')}/>
                <Text style={styles.text1}>All in One Printer CAD 199</Text>
            </View>
            <View style={styles.product3}>
                <Image style={styles.img2} source = {require('../image/omen.jpg')}/>
                <Text style={styles.text1}>HP Omen Gaming Laptop CAD 999</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    products:{
        paddingTop: 100,
        borderColor: 'black',
        flexDirection:'row',
        height:100,
        width:100,
        BorderRadius: 100/2,
    },
    textContainer:{
        flexDirection:'column',
    },

    img: {

        marginLeft:40,

        height: 100,
        width: 180,
        resizeMode:'contain',

    },
    imgKey: {
        marginLeft:40,

        height: 100,
        width: 180,
        resizeMode:'contain',
    },
    img2:{
        marginLeft:40,

        height: 100,
        width: 180,
        resizeMode:'contain',
    },
    text1: {
        fontWeight:'bold',
        justifyContent:'center',
    },
    product1:{

        paddingTop:40,
        marginLeft:20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
    },
    product2:{
        marginLeft:20,
        paddingTop:40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    product3:{
        marginLeft:20,
        paddingTop:40,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Product2;
