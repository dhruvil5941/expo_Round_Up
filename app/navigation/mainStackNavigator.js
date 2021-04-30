import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserFinancesQuestion from '../screens/userfinancesquestion';
import Conservative from '../screens/portfolio';
import Landing from '../screens/landingscreen';
import WelcomeFinanceScreen from '../screens/welcomefinancescreen';
import WelcomeQuestionScreen from '../screens/welcomequestionscreen';
import TabNavigator from './tabnavigator';

const Stack = createStackNavigator();

function MainStackNavigator(props) {
  return (
    <NavigationContainer independent={true} initialRouteName="Landing">
      <Stack.Navigator
        initialRouteName="Landing"
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
          options={{title: 'RoundUp', gestureEnabled: false}}
          name="Conservative"
          component={Conservative}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnboardingScreenOne"
          component={WelcomeFinanceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnboardingScreenTwo"
          component={WelcomeQuestionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Userfinancesquestion"
          component={UserFinancesQuestion}
          options={{
            title: 'RoundUp',
          }}
        />
        <Stack.Screen
          options={{headerShown: false, gestureEnabled: false}}
          name="Home"
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
