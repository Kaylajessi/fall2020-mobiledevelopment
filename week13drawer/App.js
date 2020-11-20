import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Activities!</Text>
      <Button 
        title="Fencing"
        onPress={() => props.navigation.navigate("Fencing")}/>
      <Button 
        title="Biking"
        onPress={() => props.navigation.navigate("Biking")}/>
    </View>
  );
}


function FencingScreen() {
  const [track, setTrack] = useState(0)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Fencing count: {track}</Text>
      <Button
        title="Increase"
        onPress={() => setTrack(track + 1)}
      />
      <Button
        title="Reset"
        onPress={() => setTrack(0)}
      />
    </View>
  );
}

function BikingScreen() {
  const [track, setTrack] = useState(0)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Biking count: {track}</Text>
      <Button
        title="Increase"
        onPress={() => setTrack(track + 1) }
      />
      <Button
        title="Reset"
        onPress={() => setTrack(0)}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function Home(screen1, screen2) {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Fencing" component={screen1} />
        <Drawer.Screen name="Biking" component={screen2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function App(){
  return Home(
    FencingScreen, BikingScreen
  );
}

export default Home;
