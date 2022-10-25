import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const TitleSection = ({ title }) => {
  return (
    <View style={styles.container}>
      {
        title
        &&
        <View>
          <Text style={styles.titleSection}>{title}</Text>
          <View style={styles.barSection} />
        </View>
      }
    </View>
  );
};

export default TitleSection;
const styles = StyleSheet.create({
  titleSection: {
    fontSize: 18,
    color: '#be924e',
    textTransform: 'uppercase',
    paddingLeft: 20,
    paddingTop: 20,
  },
  barSection: {
    height: 2,
    width: 35,
    backgroundColor: '#be924e',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 20
  },
});