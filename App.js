import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharactersScreen from './screens/CharactersScreen';
import CharacterDetailsScreen from './screens/CharacterDetailsScreen';
import ShipsScreen from './screens/ShipsScreen';
import MoviesScreen from './screens/MoviesScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Characters">
        <Stack.Screen name="Characters" component={CharactersScreen} options={{ title: 'Personagens' }} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} options={{ title: 'Detalhes do Personagem' }} />
        <Stack.Screen name="Ships" component={ShipsScreen} options={{ title: 'Naves' }} />
        <Stack.Screen name="Movies" component={MoviesScreen} options={{ title: 'Filmes' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Sobre' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
