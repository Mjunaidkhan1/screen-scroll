
import React from 'react';
import { StyleSheet, ScrollView,StatusBar} from 'react-native';
import FristScreen from './src/components/card/FirstScreen';
import SecondScreen from './src/components/card/SecondScreen';

export default function App() {
  
  return (
        
    <ScrollView pagingEnabled={true} horizontal={true} style={styles.container}>

      <StatusBar barStyle="light-content"  />
     <FristScreen />
      <SecondScreen />
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: screenwidth,
    backgroundColor: '#7A0000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
