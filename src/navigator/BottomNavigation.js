import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard/home';
import Search from '../screens/dashboard/search';
import AddPost from '../screens/dashboard/addPost';
import Reel from '../screens/dashboard/reel';
import UserProfile from '../screens/dashboard/userProfile';
import {vw} from '../utils/dimension';

const Tab = createBottomTabNavigator();
const HomeTabIcon = ({focused}) => (
  <Image
    style={styles.icon}
    source={
      focused
        ? require('../assets/footer/sHomeButton.png')
        : require('../assets/footer/homeButton.png')
    }
  />
);
const SearchTabIcon = ({focused}) => (
  <Image
    style={styles.icon}
    source={
      focused
        ? require('../assets/footer/sSearch.png')
        : require('../assets/footer/search.png')
    }
  />
);

const AddPostTabIcon = () => (
  <Image style={styles.icon} source={require('../assets/footer/addPost.png')} />
);

const ReelsTabIcon = () => (
  <Image style={styles.icon} source={require('../assets/footer/reel.png')} />
);

const UserProfileTabIcon = () => (
  <Image style={styles.icon} source={require('../assets/footer/user.png')} />
);

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: SearchTabIcon,
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: AddPostTabIcon,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reel}
        options={{
          tabBarIcon: ReelsTabIcon,
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarIcon: UserProfileTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  icon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
});
