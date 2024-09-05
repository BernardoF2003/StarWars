import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const CharacterDetailsScreen = ({ route, navigation }) => {
  const { character } = route.params;
  const [ships, setShips] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const shipRequests = character.starships.map(url => axios.get(url));
        const movieRequests = character.films.map(url => axios.get(url));
        
        const shipResponses = await Promise.all(shipRequests);
        const movieResponses = await Promise.all(movieRequests);

        setShips(shipResponses.map(res => res.data));
        setMovies(movieResponses.map(res => res.data));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [character]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>Nome: {character.name}</Text>
      <Text style={styles.detailText}>Altura: {character.height}</Text>
      <Text style={styles.detailText}>Peso: {character.mass}</Text>
      <Text style={styles.detailText}>Cor do cabelo: {character.hair_color}</Text>
      <Text style={styles.detailText}>Cor da pele: {character.skin_color}</Text>
      <Text style={styles.detailText}>Cor dos olhos: {character.eye_color}</Text>
      <Text style={styles.detailText}>Gênero: {character.gender}</Text>

      <Button
        title="Naves"
        onPress={() => navigation.navigate('Ships', { ships })}
      />
      <Button
        title="Filmes"
        onPress={() => navigation.navigate('Movies', { movies })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  detailText: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default CharacterDetailsScreen;
