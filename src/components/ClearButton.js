import React from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements'

const ClearButton = ({text, onPress}) => {
    return (
      <TouchableOpacity style={styles.buttonClear} onPress={onPress}>
        <Icon name='close-outline' type='ionicon' color='white' size={20} />
      </TouchableOpacity>
    )
  }

  export default ClearButton;
  const styles = StyleSheet.create({
    buttonClear: {
      padding: 10,
      backgroundColor: '#be924e',
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    }
  });