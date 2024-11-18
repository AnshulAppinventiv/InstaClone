import React from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileDetails from '../../components/ProfileDetails';
import ProfilePost from '../../components/ProfilePost';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

const UserProfile = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ProfileHeader />
      <ProfileDetails />
      <ProfilePost />
    </SafeAreaView>
  );
};

export default UserProfile;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
