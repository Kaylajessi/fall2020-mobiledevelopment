import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';


export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title style={styles.header}>Vote!</Card.Title>
        <Text>Please vote for your preferred choice of food!</Text>
        <Card.Divider/>
        <Button title="Pizza" onPress={ () => {setPressed(!pressed)} } />
        <Card.Divider/>
        <Button title="Burger" onPress={ () => {setPressed(!pressed)} } />
        <Card.Divider/>
        <Button title="Wings" onPress={ () => {setPressed(!pressed)} } />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  header: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#06c258',
  },
});