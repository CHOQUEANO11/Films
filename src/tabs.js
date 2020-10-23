import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Intro from './Screens/intro';
import Folder from './Screens/folder';
import Details from './Screens/details';
import DetailsFolder from './Screens/detailFolder';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Tabs() {
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'orange',
          }}
          initial
          name="Seja bem vindo"
          component={Intro}
        />
        <Stack.Screen name="Nossa coleção" component={Folder} />
        <Stack.Screen name="detalhe do filme" component={DetailsFolder} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Intro}
        tabBarOptions={{
          activeTintColor: 'blue',
          activeBackgroundColor: '#f9ecc4',
        }}>
        <Tab.Screen
          name="Início"
          component={MyStack}
          options={{
            size: 'medium',
            tabBarLabel: 'Início',
            tabBarIcon: ({color, size}) => (
              <Icon name="house" size={30} color="#c8e6c9" />
            ),
          }}
        />
        <Tab.Screen
          name="Coleção"
          component={Folder}
          options={{
            tabBarLabel: 'Coleção',
            tabBarIcon: ({color, size}) => (
              <Icon name="book" size={30} color="#c8e6c9" />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Details}
          options={{
            tabBarLabel: 'Sobre',
            tabBarIcon: ({color, size}) => (
              <Icon name="person" size={30} color="#c8e6c9" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
