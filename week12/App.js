import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default function App() {
  const [pressed, setPressed] = useState()
  const shouldShow = pressed === undefined 
  return (
       <View style={styles.container}>
         {shouldShow &&
          <Card>
              <Card.Title style={styles.header}>Vote!</Card.Title>
              <Text>Please vote for your preferred choice of food</Text>
              <Card.Divider/>
              <Button title="Pizza" onPress={ () => {setPressed("Pizza")}} />
              <Card.Divider/>
              <Button title="Burger" onPress={ () => {setPressed("Burger")}} />
              <Card.Divider/>
              <Button title="Wings" onPress={ () => {setPressed("Wings")}} />
          </Card>
         }
          <Card>
            {pressed}
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