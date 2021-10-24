import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import InputSearch from './InputSearch';

const translateTag = (tag) => {
  switch (tag) {
    case 'lutador':
      return 'Fighter';
    case 'tanque':
      return 'Tank';
    case 'mago':
      return 'Mage';
    case 'assassino':
      return 'Assassin';
    case 'atirador':
      return 'Marksman';
    case 'suporte':
      return 'Support';
    default:
      return 'Outros';
  }
}

const ChampionList = () => {

  const navigation = useNavigation();
  const [champions, setChampions] = useState([]);
  const [showChampions, setShowChampions] = useState([]);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    fetch('https://ddragon.leagueoflegends.com/cdn/11.20.1/data/pt_BR/champion.json')
      .then(res => res.json())
      .then(res => {
        const { data } = res;
        const champions = [];
        Object.entries(data).map(([name, champ]) => {
          const tags = champ.tags;
          champions.push({
            name,
            tags,
            image: `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${data[name].image.full}`
          });
        });
        setChampions(champions);
        setShowChampions(champions);
      }).catch(err => setChampions([]));
  }, []);

  function filter(value) {
    if (value) {
      setFiltered(true);
      setShowChampions(
        champions.filter(champ =>
          champ.name.toLowerCase().includes(value.toLowerCase()) ||
          champ.tags.includes(translateTag(value.toLowerCase()))
        )
      );
    } else {
      setFiltered(false);
      setShowChampions(champions);
    }
  }

  return (
    <View>
      {
        champions.length > 0 &&
        <View style={styles.container}>
          <Text style={styles.title}>Campeões</Text>
          <View style={styles.bar} />
          <InputSearch
            placeholder={'Buscar campeão por nome ou tag'}
            submit={(value) => filter(value)}
            filtered={filtered}
          />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {showChampions.map((item, i) => (
              <TouchableOpacity key={i} style={styles.item(i == 0)} onPress={() => { navigation.navigate('ChampionScreen', { champion: item.name }); }}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.name}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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
  item: (first) => ({
    marginRight: 16,
    marginLeft: first ? 16 : 0,
    alignItems: 'center',
  }),
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#be924e',
    borderRadius: 8,
    width: '70%'
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
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