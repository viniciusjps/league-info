import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const TitleSection = ({ title, invert }) => {
  return (
    <View style={styles.container}>
      {
        title
        &&
        <View>
          <Text style={styles.titleSection(invert)}>{title}</Text>
          <View style={styles.barSection(invert)} />
        </View>
      }
    </View>
  );
};

export default TitleSection;
const styles = StyleSheet.create({
  titleSection: (invert) => ({
    fontSize: 18,
    color: (invert === true) ? '#fff' : '#be924e',
    textTransform: 'uppercase',
    paddingLeft: 20,
    paddingTop: 20,
  }),
  barSection: (invert) => ({
    height: 2,
    width: 35,
    backgroundColor: (invert === true) ? '#fff' : '#be924e',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 20
  }),
});