/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserData} from '../utils/UserData';
import {vw, vh, SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/dimension';

const StoryView = ({navigation, route}) => {
  const [currentIndex, setCurrentIndex] = useState(route.params.index || 0);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressDuration = 5000;
  const selectedItem = UserData[currentIndex];

  useEffect(() => {
    startProgressBar();

    const timer = setTimeout(() => {
      goToNextStory();
    }, progressDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  const startProgressBar = () => {
    setProgress(new Animated.Value(0));
    Animated.timing(progress, {
      toValue: 1,
      duration: progressDuration,
      useNativeDriver: false,
    }).start();
  };

  const goToNextStory = () => {
    if (currentIndex < UserData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.goBack();
    }
  };

  const goToPreviousStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      navigation.goBack();
    }
  };

  const handleStoryPress = e => {
    const clickX = e.nativeEvent.locationX;
    if (clickX > SCREEN_WIDTH / 2) {
      goToNextStory();
    } else {
      goToPreviousStory();
    }
  };

  const storyTime = selectedItem.story.time;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image style={styles.profileImg} source={selectedItem.profile} />
        <Text style={styles.userName}>{selectedItem.name}</Text>
        <Text style={styles.time}>{storyTime}h</Text>
        </View>
        <Image
        source={require('../assets/icon/more.png')}
        style={{width:vw(22),height:vh(16),resizeMode:'contain',tintColor:'white'}}/>
      </View>

      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>

      <Pressable style={styles.touchableArea} onPress={handleStoryPress}>
        <Image source={selectedItem.post.image} style={styles.storyImg} />
      </Pressable>

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
        <TouchableOpacity style={styles.likeButton}>
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
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: vw(12),
    position: 'relative',
    zIndex: 1,
    marginBottom:10,
  },
  profileImg: {
    height: vw(32),
    width: vw(32),
    resizeMode: 'cover',
    borderRadius: 20,
    marginRight: vw(10),
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  time: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: vw(10),
    color: 'grey',
  },
  storyImg: {
    height: SCREEN_HEIGHT / 1.25,
    width: SCREEN_WIDTH,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    resizeMode:'cover',
  },
  footerContainer: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    marginTop: vh(10),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: vw(6),
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
  likeButton: {
    marginLeft: vw(10),
  },
});
