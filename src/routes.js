import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Image } from 'react-native';

import Feed from './pages/feed';

import Logo from './assets/instagram.png';

const Stack = createStackNavigator();

function LogoTitle(){
  return(
    <Image 
      source={Logo}
    />
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="feed"
          component={Feed}
          options={{headerTitle: props =>  <LogoTitle {...props}/>}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
