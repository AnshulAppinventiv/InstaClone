import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Dashboard from '../screens/dashboard/Dashboard';
import StoryView from '../components/StoryView';
import BottomNavigation from './BottomNavigation';
import Menu from '../screens/dashboard/Menu';
import SplashScreen from '../screens/auth/Splash';
import ChatScreen from '../screens/dashboard/Chats';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SplashScreen'}screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Story" component={StoryView} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Dashboard" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;