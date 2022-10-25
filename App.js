import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./src/screens/HomeScreen";
import ChampionScreen from "./src/screens/ChampionScreen";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const Stack = createNativeStackNavigator();
  const PATCH = '12.20.1';

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator 
          initialRouteName="HomeScreen"
        >
          <Stack.Screen
            name="HomeScreen"
            initialParams={{ patch: PATCH }}
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ChampionScreen"
            initialParams={{ patch: PATCH }}
            component={ChampionScreen}
            options={{
              headerShown: true,
              title: ''
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
