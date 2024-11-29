import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signUp';
import Dashboard from '../screens/dashboard/home';
import StoryView from '../components/StoryView';
import BottomNavigation from './BottomNavigation';
import SplashScreen from '../screens/auth/splash';
import ChatScreen from '../screens/dashboard/chats';
import ProfilePosts from '../screens/dashboard/profilePosts';
import AddPost from '../screens/dashboard/addPost';
import EditProfile from '../screens/dashboard/editProfile';
import Reels from '../screens/dashboard/reels';


const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="StoryView" component={StoryView} />
        <Stack.Screen name="Dashboard" component={BottomNavigation} />
        <Stack.Screen name="ProfilePosts" component={ProfilePosts} />
        <Stack.Screen name="Addpost" component={AddPost} options={{animation:'slide_from_bottom'}} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Reels" component={Reels} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
