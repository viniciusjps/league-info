import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import { Icon } from 'react-native-elements'
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const InputSearch = ({ placeholder, submit, filtered }) => {

  const [search, setSearch] = React.useState('');

  return (
    <View style={styles.content}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSearch(text)}
        value={search}
        multiline={false}
        clearButtonMode='always'
        placeholder={placeholder}
      />
      <TouchableOpacity
        style={styles.buttonClear(filtered)}
        onPress={() => submit(filtered ? '' : search)}
        activeOpacity={0.7}>
        {
          filtered
            ? <Icon name='close-outline' type='ionicon' color='white' size={20} />
            : <Icon name='search' type='ionicon' color='white' size={20} />

        }
      </TouchableOpacity>
    </View>
  )
}

export default InputSearch;
const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignContent: 'center',
    padding: 15,
    paddingTop: 0,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 15,
    borderColor: '#be924e',
    borderRadius: 50,
    marginRight: 10,
    width: screenWidth - 80
  },
  buttonClear: (filtered) => ({
    padding: 10,
    backgroundColor: filtered ? '#242423' : '#be924e',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  })
});