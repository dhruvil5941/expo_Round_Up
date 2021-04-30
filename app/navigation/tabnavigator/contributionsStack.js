import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ContributionsScreen from '../../screens/contributionscreen';

const Stack = createStackNavigator();
const ContributionsStack = () => {
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
        name={'ContributionsScreen'}
        component={ContributionsScreen}
        options={{title: 'RoundUp'}}
      />
    </Stack.Navigator>
  );
};

export default ContributionsStack;
