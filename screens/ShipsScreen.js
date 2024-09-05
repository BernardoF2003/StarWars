import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ShipsScreen = ({ route }) => {
  const { ships } = route.params;

  return (
    <View style={styles.container}>
      {ships.length > 0 ? (
        <FlatList
          data={ships}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardText}>Nome: {item.name}</Text>
              <Text style={styles.cardText}>Modelo: {item.model}</Text>
              <Text style={styles.cardText}>Número de passageiros: {item.passengers}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.message}>Não há naves disponíveis.</Text>
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

export default ShipsScreen;
