import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ResourcesScreen from '../../screens/resourcesscreen';

const Stack = createStackNavigator();
const ResourcesStack = () => {
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
        name={'ResourcesScreen'}
        component={ResourcesScreen}
        options={{title: 'RoundUp'}}
      />
    </Stack.Navigator>
  );
};

export default ResourcesStack;
