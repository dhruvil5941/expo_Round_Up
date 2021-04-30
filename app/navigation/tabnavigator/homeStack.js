import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#1FAD9E',
        },
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 23,
        },
      }}>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{title: 'RoundUp'}}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
