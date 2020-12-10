import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Choice from './Choice.js'

const appetizer = ["cheese sticks", "potato skins", "zingers"]
const meal = ["pasta", "pizza", "burgers"]
export default function App() {
  return (
    <View>
      <Card>
        <Card.Title>Menu</Card.Title>
        <Text>Appetizers</Text>
        <Choice storage={appetizer}></Choice>
        <Card.Divider/>
        <Text>Meal</Text>
        <Choice storage={meal}></Choice>
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
