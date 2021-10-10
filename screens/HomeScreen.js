import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  
});