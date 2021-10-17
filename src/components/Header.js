import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View
} from 'react-native';

import logoGame from './../../assets/images/logo_name.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: logoGame }} />
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#242423',
    alignItems: 'center',
    position: 'relative',
    zIndex: 5
  },
  image: {
    height: 140,
    width: 140,
    position: 'absolute',
    top: -20
  }
});