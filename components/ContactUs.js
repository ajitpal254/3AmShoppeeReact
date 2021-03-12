import React from 'react';
import {Text,StyleSheet,Image,TextInput,View} from 'react-native';

const ContactUs = () =>{
    return (
        <View style={styles.contact}>
            <Text style={styles.mainText}>Contact Us</Text>
            <View style={styles.name}>
                <Text style={styles.text1}>Name</Text>
                <TextInput style={styles.name1} placeholder={"Enter Your Nane"}/>
            </View>
            <View style={styles.email}>
                <Text style={styles.text1}>Email</Text>
                <TextInput style={styles.email1} placeholder={"abc@abc.com"}/>
            </View>
            <View style={styles.phn}>
                <Text style={styles.text1}>Phone No</Text>
                <TextInput style={styles.phn1} placeholder={"eg1234567890"} />
            </View>
            <View style={styles.description}>
                <Text style={styles.text1}>Description</Text>
                <TextInput style={styles.description1} placeholder={"Type Here..."} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
     contact: {
         borderWidth:1,
         paddingTop:20,
        flex:1
     },
    mainText: {
      textAlign: 'center',
      fontSize:50,
    },
     name: {
       flexDirection:'row',
     },
    text1: {
      paddingRight:10,
    },
     name1:{

       borderWidth:1,
     },
     email: {
         flexDirection:'row',
     },
    email1:{

        borderWidth:1,
    },
    phn:{
         flexDirection:'row',
    },
    phn1:{
         borderWidth:1,
    },
    description:{
         flexDirection:'row',

    },
    description1:{
         borderWidth:1,
        height: 100,
        width:500,
    }
})
export default ContactUs;
