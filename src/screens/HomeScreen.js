import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from '../components/Header';
import ChampionList from '../components/ChampionList';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ChampionList />
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});