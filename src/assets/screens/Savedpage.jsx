import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopNavigator from './TopNavigator'; // Import the Header component
import BottomNavBar from './BottomNavBar'; // Import the BottomNavBar component

const Savedpage = () => {
  return (
    <View style={styles.container}>
    <TopNavigator /> 
    <View style={styles.content}>
      <Text>My Project</Text>
 
    </View>
    <BottomNavBar /> 
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    marginTop: 100, // Adjust this to fit your layout
    padding: 16,
  },
});

export default Savedpage;
