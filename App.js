import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import Products from './components/Products';
import SearchBarClass from './components/SearchBarClass';


const App = () => {
  return (

      <View style={styles.container}>

        <Header />
        <SearchBarClass />
        <Products />
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
 container: {
     flex:1,
     paddingTop: 40,
     backgroundColor:'lightgrey'
 }

});
export default App;
