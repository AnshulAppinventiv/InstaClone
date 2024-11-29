import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vw, vh, SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/dimension';

const StoryView = ({navigation, route}) => {
  console.log(route.params);
  const selectedItem = route.params.item;
  const currentTime = new Date();
  const currentHr = currentTime.getHours();
  const storyTime = currentHr - selectedItem.story.time;

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.goBack();
    }, 1000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Image style={styles.profileImg} source={selectedItem.profile} />
        <Text style={styles.userName}>{selectedItem.name}</Text>
        <Text style={styles.time}>{storyTime}h</Text>
      </View>
      <View>
        <Image source={selectedItem.story.image} style={styles.storyImg} />
        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require('../assets/icon/Comment.png')}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.msgInput}
            placeholder="Message"
            placeholderTextColor={'white'}
          />
          <TouchableOpacity style={{marginLeft: 10}}>
            <Image
              style={styles.icon}
              source={require('../assets/icon/Like.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require('../assets/icon/share.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StoryView;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    paddingTop: vh(12),
    paddingLeft: vw(12),
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  profileImg: {
    height: vw(32),
    width: vw(30),
    borderRadius: 20,
    marginRight: vw(10),
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  time: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: vw(10),
    color: 'white',
  },
  storyImg: {
    height: SCREEN_HEIGHT / 1.25,
    width: SCREEN_WIDTH,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  footerContainer: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    marginTop: vh(10),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  msgInput: {
    borderWidth: 1,
    borderColor: 'white',
    width: vw(245),
    height: vw(36),
    paddingHorizontal: vw(15),
    color: 'white',
    borderRadius: 30,
  },
  icon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
    tintColor: 'white',
    marginRight: vw(10),
  },
});
