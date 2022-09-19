import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import BottomNavigatorScreen from './src/screens/BottomNavigatorScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Bottom" component={BottomNavigatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
