import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signUp';
import Dashboard from '../screens/dashboard/home';
import StoryView from '../components/StoryView';
import BottomNavigation from './BottomNavigation';
import SplashScreen from '../screens/auth/splash';
import Chats from '../screens/dashboard/chats';
import ProfilePosts from '../screens/dashboard/profilePosts';
import AddPost from '../screens/dashboard/addPost';
import EditProfile from '../screens/dashboard/editProfile';
import Reels from '../screens/dashboard/reels';
import ChatScreen from '../screens/dashboard/chatScreen';
import SectionMenu from '../screens/dashboard/settings';
import SignupEmail from '../screens/auth/signUpEmail';
import SavedPost from '../screens/dashboard/savePost';
import CaptionScreen from '../screens/dashboard/caption';
import NotificationsScreen from '../screens/dashboard/notifications';

export type StackParamList = {
  SplashScreen: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Chats: undefined;
  StoryView: undefined;
  Dashboard: undefined;
  ProfilePosts: undefined;
  Addpost: undefined;
  EditProfile: undefined;
  Reels: undefined;
  ChatScreen: undefined;
  SectionMenu: undefined;
  SignupEmail: undefined;
  SavedPost: undefined;
  CaptionScreen: undefined;
  NotificationScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="StoryView" component={StoryView} />
        <Stack.Screen name="Dashboard" component={BottomNavigation} />
        <Stack.Screen name="ProfilePosts" component={ProfilePosts} />
        <Stack.Screen
          name="Addpost"
          component={AddPost}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Reels" component={Reels} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="SectionMenu" component={SectionMenu} />
        <Stack.Screen name="SignupEmail" component={SignupEmail} />
        <Stack.Screen name="SavedPost" component={SavedPost} />
        <Stack.Screen name="CaptionScreen" component={CaptionScreen} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
