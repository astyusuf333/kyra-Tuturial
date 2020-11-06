import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import StudentScreen from './src/screens/StudentScreen';
import InteractiveScreen from './src/screens/InteractiveScreen';
import CounterScreen from './src/screens/CounterScreen';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Muhammad Yusuf' }}
          />
          <Stack.Screen
          name="Product"
          component={ProductScreen}
          />
          <Stack.Screen
          name="Interactive"
          component={InteractiveScreen}
          />
          <Stack.Screen
          name="Counter"
          component={CounterScreen}
          />
          <Stack.Screen
          name="Student"
          component={StudentScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default MainApp;