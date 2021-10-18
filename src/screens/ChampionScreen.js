import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ChampionScreen = ({ route }) => {
  const navigation = useNavigation();
  const [champion, setChampion] = useState(undefined);
  const [avatar, setAvatar] = useState(undefined);

  useEffect(() => {
    const champ = route.params?.champion;
    if (champ) {
      fetch(`https://ddragon.leagueoflegends.com/cdn/11.20.1/data/pt_BR/champion/${champ}.json`)
        .then(res => res.json())
        .then(res => {
          setAvatar(`https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${champ}.png`);
          setChampion(res.data[champ]);
          navigation.setOptions({ title: champ });
        }).catch(err => { useNavigation().goBack(); });
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {
        champion
          ?
          <ScrollView>
            <ImageBackground style={styles.header}
              source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg` }}
              imageStyle={{ opacity: 0.2 }}>
              <Image style={styles.avatar} source={{ uri: avatar }} />
              <View>
                <Text style={styles.title}>{champion.name}</Text>
                <View style={styles.bar} />
                <Text style={styles.subtitle}>{champion.title}</Text>
              </View>
            </ImageBackground>
            <View style={styles.content}>
              <Text style={styles.description}>{champion.blurb}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.titleSection}>Passiva</Text>
              <View style={styles.barSection} />
              <View style={styles.passiveView}>
                <Image style={styles.passive} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/passive/${champion.passive.image.full}` }} />
                <Text style={styles.passiveDescription}>{champion.passive.description}</Text>
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.titleSection}>Splash Arte</Text>
              <View style={styles.barSection} />
              <Image style={styles.splash} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg` }} />
            </View>
            <View style={styles.content}>
              <Text style={styles.titleSection}>Habilidades</Text>
              <View style={styles.barSection} />
              {
                champion.spells.map((spell, i) => (
                  <View key={i} style={styles.spell}>
                    <View style={styles.spellHeader}>
                      <Image style={styles.spellImage} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/spell/${spell.image.full}` }} />
                      <Text style={styles.spellName}>{spell.name}</Text>
                    </View>
                    <Text style={styles.spellDescription}>{spell.description}</Text>
                  </View>
                ))
              }
            </View>
            <View style={styles.content}>
              <Text style={styles.titleSection}>Skins</Text>
              <View style={styles.barSection} />
              <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                  champion.skins.slice(1).map((skin, i) => (
                    <TouchableOpacity key={i} style={styles.skin}>
                      <Image style={styles.skinImage} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg` }} />
                      <Text style={styles.skinName}>{skin.name}</Text>
                    </TouchableOpacity>
                  ))
                }
              </ScrollView>
            </View>
          </ScrollView>
          : undefined
      }
    </SafeAreaView>
  );
};

export default ChampionScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#be924e',
    resizeMode: 'cover',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 50,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#be924e',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  bar: {
    height: 2,
    width: 70,
    backgroundColor: '#be924e',
    marginTop: 8,
    marginBottom: 8,
  },
  barSection: {
    height: 2,
    width: 35,
    backgroundColor: '#be924e',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 20
  },
  description: {
    fontSize: 14,
    padding: 20,
    paddingBottom: 0,
  },
  titleSection: {
    fontSize: 18,
    color: '#be924e',
    textTransform: 'uppercase',
    paddingLeft: 20,
    paddingTop: 20,
  },
  passiveView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 10,
    flex: 1,
  },
  passive: {
    marginBottom: 10,
    width: 64,
    height: 64,
    borderRadius: 5
  },
  passiveDescription: {
    fontSize: 14,
  },
  splash: {
    marginTop: 10,
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  skin: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 15,
    position: 'relative',
  },
  skinImage: {
    height: 250,
    width: 430,
    resizeMode: 'cover',
    marginLeft: 20,
    borderRadius: 10,
  },
  skinName: {
    position: 'absolute',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    bottom: 0,
    left: 0,
    textTransform: 'capitalize',
    fontSize: 14,
    backgroundColor: '#242423',
    color: '#fff',
    borderRadius: 8,
    marginLeft: 20,
  },
  scroll: {
    paddingBottom: 20
  },
  spell: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 10,
  },
  spellHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  spellImage: {
    width: 64,
    height: 64,
    borderRadius: 5
  },
  spellName: {
    fontSize: 20,
    marginLeft: 14,
    fontWeight: '500',
    color: '#242423',
  },
  spellDescription: {
    paddingTop: 10,
  }
});