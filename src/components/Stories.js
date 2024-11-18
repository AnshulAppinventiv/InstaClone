import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {UserData} from '../utils/UserData';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_WIDTH, SCREEN_HEIGHT, vh, vw} from '../utils/dimension';

const Stories = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <View style={styles.storyContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Story', {item})}>
          <View style={styles.storyView}>
            <Image style={styles.storyImage} source={item.story.image} />
          </View>
        </TouchableOpacity>

        <Text style={styles.userName}>{item.username}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={UserData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingVertical: vh(4),
    // borderWidth:1,
    marginLeft:vw(5),
  },
  storyContainer: {
    paddingVertical: vh(3),
    paddingHorizontal: vw(6),
    // borderWidth:1,
  },
  storyView: {
    width: SCREEN_WIDTH / 4.5,
    height: SCREEN_WIDTH / 4.5,
    borderWidth: 3,
    borderRadius: 45,
    alignItems: 'center',
    padding: 3,
    justifyContent: 'center',
    borderColor: '#FF20B1',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 45,
    resizeMode: 'cover',
  },
  userName: {
    textAlign: 'center',
    color: 'black',
    marginTop: 0,
  },
});
