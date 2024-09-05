import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Desenvolvedores:</Text>
      <br></br>
      <Text style={styles.text}>Nome: Bernardo Ferrari</Text>
      <Text style={styles.text}>RA: 1130327</Text>
      <br></br><br></br>
      <Text style={styles.text}>Nome Completo: Enzo Schultz</Text>
      <Text style={styles.text}>RA: 1135046</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AboutScreen;
