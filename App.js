import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import Header from './components/Header';
import Products from './components/Products';
import SearchBarClass from './components/SearchBarClass';
import About from './components/About';
import Product2 from "./components/Product2";
import ContactUs from './components/ContactUs';


const App = () => {
  return (

      <ScrollView style={styles.container}>

        <Header />
        <SearchBarClass />
        <Products />
        <Product2 />
        <Text style={styles.line}>_________________________________________________________________________________________</Text>
        <About />
        <ContactUs />
      <StatusBar style="auto" />
    </ScrollView>

  );
}

const styles = StyleSheet.create({
 container: {
     flex:1,
     backgroundColor: 'pink',
     marginHorizontal: 20,

 },
line:{
     fontSize: 40,
     paddingTop:60,
}
});
export default App;
