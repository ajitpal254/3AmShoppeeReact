import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Products = () =>{
    return(
        <View style={styles.products}>
            <View style={styles.product1}>
                <Image style={styles.img} source={require('C:/Users/ajitp/3AmShoppee/image/Corsair.jpg') }/>
                <Text style={styles.text1}>Corsair Keyboard CAD 49.99</Text>
            </View>

            <View style={styles.product2}>
                <Image style={styles.imgKey} source = {require('../image/RazerMouse.jpeg')}/>
                <Text style={styles.text1}>Razer Gaming Mouse CAD 39.99</Text>
            </View>
            <View style={styles.product3}>
                <Image style={styles.img2} source = {require('../image/Monitor.jpg')}/>
                <Text style={styles.text1}>Gaming Monitor by ROG CAD 129.99</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
products:{

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

        height: 50,
        width: 180,
        resizeMode:'contain',

    },
    imgKey: {
        marginLeft:40,

        height: 50,
        width: 180,
        resizeMode:'contain',
    },
    img2:{
        marginLeft:40,

        height: 50,
        width: 180,
        resizeMode:'contain',
    },
    text1: {
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

export default Products;
