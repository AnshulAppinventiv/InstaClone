import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {UserData} from '../utils/UserData';
import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      {UserData.map(item => {
        console.log(item);
        return (
          <View style={styles.storyContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Story', {item})}>
              <View style={styles.storyView}>
                <Image style={styles.storyImage} source={item.story.image} />
              </View>
            </TouchableOpacity>
            <Text style={styles.userName}>{item.username}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingTop: 8,
    backgroundColor: 'white',
  },
  storyContainer: {
    marginLeft: 10,
  },
  storyView: {
    borderWidth: 3,
    borderRadius: 40,
    padding: 2,
    borderColor: '#FF20B1',
  },
  storyImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  userName: {
    textAlign: 'center',
    color: 'black',
  },
});
