/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   View,
 } from 'react-native';
 import MainScreen from './src/Screens/MainScreen';
 
 const App: () => Node = () => {
   return (
     <>
     <SafeAreaView style={{flex:1}}>
       <View style={styles.Container}>
           <MainScreen />
       </View>
     </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({
   Container: {
     flex:1,
   }
 });
 
 export default App;