import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView
} from 'react-native';


const ChampionList = () => {

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
          ? <View style={styles.container}>
            <Text style={styles.title}>Campeões</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {champions.map((item, i) => (
                <View key={i} style={styles.item}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <Text style={styles.name}>{item.name}</Text>
                </View>
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
    paddingTop: 50,
    paddingLeft: 15,
    paddingBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 15,
    color: '#be924e',
    textTransform: 'uppercase'
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 35,
  },
  item: {
    marginRight: 15,
    alignItems: 'center'
  },
  name: {
    marginTop: 3,
    color: '#242423'
  }
});