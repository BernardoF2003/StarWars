import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const MoviesScreen = ({ route }) => {
  const { movies } = route.params;

  return (
    <View style={styles.container}>
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>Título: {item.title}</Text>
              <Text style={styles.cardText}>Diretor: {item.director}</Text>
              <Text style={styles.cardText}>Data de lançamento: {item.release_date}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.message}>Não há filmes disponíveis.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MoviesScreen;
