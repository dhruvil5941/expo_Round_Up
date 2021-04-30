import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TransactionsScreen from '../../screens/transactionscreen';

const Stack = createStackNavigator();
const TransactionsStack = () => {
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
        name={'TransactionsScreen'}
        component={TransactionsScreen}
        options={{title: 'RoundUp'}}
      />
    </Stack.Navigator>
  );
};

export default TransactionsStack;
