import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {vh, vw} from '../utils/dimension';
import {useNavigation} from '@react-navigation/native';

const ProfileDetails = ({name, bio, imageUri}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image
          style={styles.profileImg}
          source={
            imageUri ? {uri: imageUri} : require('../assets/icon/profile.jpg')
          }
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsCount}>5</Text>
          <Text style={styles.detailsText}>Posts</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsCount}>1.2 M</Text>
          <Text style={styles.detailsText}>Followers</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsCount}>1</Text>
          <Text style={styles.detailsText}>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>{name || 'Anshul Pratap Singh'}</Text>
      <Image
        source={require('../assets/icon/flag.png')}
        style={{width: vw(18), height: vw(18)}}
      />
      <Text>{bio || 'Sportsperson'}</Text>
      <View style={styles.profileOptionContainer}>
        <TouchableOpacity
          style={styles.editProfileButton}
          onPress={() => navigation.navigate('EditProfile')}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1.0} style={styles.shareProfileButton}>
          <Text>Share Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1.0} style={styles.addContactsButton}>
          <Image
            source={require('../assets/icon/add.png')}
            style={styles.addContactsImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: vw(15),
    marginTop: vh(20),
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImg: {
    width: vw(80),
    height: vw(80),
    resizeMode: 'cover',
    borderRadius: 45,
  },
  detailsContainer: {
    width: vw(75),
    alignItems: 'center',
    paddingTop: 10,
  },
  detailsCount: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  detailsText: {
    fontSize: 16,
    color: 'black',
  },
  name: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    marginTop: vh(10),
  },
  profileOptionContainer: {
    flexDirection: 'row',
    marginTop: vh(15),
  },
  editProfileButton: {
    backgroundColor: '#E6E6E6',
    width: vw(150),
    height: vw(32),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  shareProfileButton: {
    width: vw(150),
    height: vw(32),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6E6E6',
    borderRadius: 6,
    marginLeft: vw(8),
  },
  addContactsButton: {
    width: vw(30),
    height: vw(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    marginLeft: vw(8),
    borderRadius: 6,
  },
  addContactsImage: {
    width: vw(20),
    height: vw(20),
  },
});
export default ProfileDetails;
