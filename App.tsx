import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerShown: true,
            title: 'Profile',
          }}
        />
      </Stack.Navigator>

      {/* <StatusBar style="light" /> */}
    </NavigationContainer>
  );
}

export default App;
