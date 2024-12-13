import React from 'react';
import ProfileHeader from '../../../components/ProfileHeader';
import ProfileDetails from '../../../components/ProfileDetails';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import ProfilePost from '../../../components/ProfilePost'

const UserProfile = ({route}:any) => {
  const {name, userName, bio, imageUri, newPost} = route.params || {};
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ProfileHeader userName={userName} />
      <ProfileDetails name={name} bio={bio} imageUri={imageUri} />
      <ProfilePost newPost={newPost} />
    </SafeAreaView>
  );
};

export default UserProfile;
