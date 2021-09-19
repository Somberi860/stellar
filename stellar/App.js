import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import dailypicScreen from "./screens/dailypic";
import spacecraftsScreen from "./screens/spacecrafts";
import startmapScreen from "./screens/startmap";
import homeScreen from "./screens/home";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="home" component={homeScreen} />
        <Stack.Screen name="spacecrafts" component={spacecraftsScreen} />
        <Stack.Screen name="dailypic" component={dailypicScreen} />
        <Stack.Screen name="startmap" component={startmapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;