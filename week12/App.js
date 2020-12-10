import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Choice from './Choice.js'

const appetizer = ["chips and dip", "shrimp scampi", "quesadilla"]
const meal = ["tacos", "wings", "steak"]
const desert = ["cake", "cookies", "ice cream"]

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
              <Choice storage={appetizer} title="appetizer" onPress={ (item) => {setPressed(item)}} />
              <Card.Divider/>
              <Choice storage={meal} title="meal" onPress={ (item) => {setPressed(item)}} />
              <Card.Divider/>
              <Choice storage={desert} title="dessert" onPress={ (item) => {setPressed(item)}} />
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