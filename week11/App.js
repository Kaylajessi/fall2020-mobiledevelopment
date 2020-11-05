import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default function App() {
  return (
    <View>
      <Card>
        <Card.Title>Kayla</Card.Title>
        <Text>Sushi</Text>
        <Card.Divider/>
        <Text>Pizza</Text>
        <Button title="SUBMIT"></Button>
      </Card>
    </View>

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
