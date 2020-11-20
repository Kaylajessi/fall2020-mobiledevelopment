import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Activities!</Text>
      <Button 
        title="Kickball"
        onPress={() => props.navigation.navigate("Kickball")}/>
      <Button 
        title="Golfing"
        onPress={() => props.navigation.navigate("Golfing")}/>
    </View>
  );
}


function KickballScreen() {
  const [track, setTrack] = useState(0)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Kickball count: {track}</Text>
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

function GolfingScreen() {
  const [track, setTrack] = useState(0)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Golfing count: {track}</Text>
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

const Drawer = createStackNavigator();

function Home(screen1, screen2) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Kickball" component={screen1} />
        <Stack.Screen name="Golfing" component={screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App(){
  return Home(
    KickballScreen, GolfingScreen
  );
}

export default Home;


