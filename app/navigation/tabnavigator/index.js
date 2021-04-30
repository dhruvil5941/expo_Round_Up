import React from 'react';
import {Platform} from 'react-native';
import Home from '../../screens/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcons from '../../components/tabbarIcons';
import {Color, Images} from '../../theme';

import SettingsStack from './settingStack';
import ContributionsStack from './contributionsStack';
import ResourcesStack from './resourcesStack';
import HomeStack from './homeStack';
import TransactionsStack from './transactionsStack';

const Tab = createBottomTabNavigator();

function TabNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Color.black,
        visible: true,
        activeBackgroundColor: Color.skyBlue,
        labelStyle: {
          fontSize: 11,
          marginBottom: 5,
        },
        style: {
          height: Platform.OS === 'ios' ? 90 : 60,
          paddingLeft: 8,
          marginBottom: 0,
          backgroundColor: Color.white,
          borderTopWidth: 0,
          borderTopColor: Color.white,
          elevation: 0,
        },

        tabStyle: {borderRadius: 12, height: '90%'},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <TabBarIcons icon={Images.tabHome} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsStack}
        options={{
          tabBarLabel: 'Transactions',
          tabBarIcon: ({focused}) => (
            <TabBarIcons icon={Images.tabTransactions} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Contributions"
        component={ContributionsStack}
        options={{
          tabBarLabel: 'Contributions',
          tabBarIcon: ({focused}) => (
            <TabBarIcons icon={Images.tabContributions} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused}) => <TabBarIcons icon={Images.tabSetting} />,
        }}
      />
      <Tab.Screen
        name="Resources"
        component={ResourcesStack}
        options={{
          tabBarLabel: 'Resources',
          tabBarIcon: ({focused}) => (
            <TabBarIcons icon={Images.tabResources} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
