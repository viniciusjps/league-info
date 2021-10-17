import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/core';


const ChampionList = () => {

  const navigation = useNavigation();
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    fetch('https://ddragon.leagueoflegends.com/cdn/11.20.1/data/pt_BR/champion.json')
      .then(res => res.json())
      .then(res => {
        const { data } = res;
        const champions = [];
        Object.keys(data).map(name => {
          champions.push({
            name,
            image: `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${data[name].image.full}`
          });
        });
        setChampions(champions);
      }).catch(err => setChampions([]));
  }, []);

  return (
    <View>
      {
        champions.length > 0
          ?
          <View style={styles.container}>
            <Text style={styles.title}>Campeões</Text>
            <View style={styles.bar} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {champions.map((item, i) => (
                <TouchableOpacity key={i} style={styles.item} onPress={() => { navigation.navigate('ChampionScreen', { champion: item.name }); }}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <Text style={styles.name}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          : undefined
      }
    </View>
  );
};

export default ChampionList;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    paddingTop: 40,
    paddingBottom: 20
  },
  title: {
    fontSize: 22,
    paddingLeft: 16,
    fontWeight: '300',
    color: '#be924e',
    textTransform: 'uppercase'
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  item: {
    marginLeft: 16,
    alignItems: 'center',
  },
  name: {
    marginTop: 3,
    color: '#242423'
  },
  bar: {
    height: 2,
    width: 50,
    backgroundColor: '#be924e',
    marginTop: 8,
    marginLeft: 16,
    marginBottom: 16,
  }
});