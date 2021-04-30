import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingScreen from '../../screens/settingscreen';

const Stack = createStackNavigator();
const SettingsStack = () => {
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
        name={'SettingScreen'}
        component={SettingScreen}
        options={{title: 'RoundUp'}}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
