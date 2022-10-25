import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import ChampionList from '../components/ChampionList';
import TitleSection from '../components/TitleSection';

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const patch = useState(route.params.patch);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {
        patch &&
        <View style={{ backgroundColor: '#1d1d1d' }}>
          <TitleSection title={'Patch'} invert={true} />
          <Text style={styles.patchValue}>{patch}</Text>
        </View>
      }
      <ChampionList />
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  patchValue: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
    paddingLeft: 20
  }
});