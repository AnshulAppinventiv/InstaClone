import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import {vw, vh} from '../utils/dimension';

const SingleReel = ({item, index, currentIndex}) => {
  const videoRef = useRef(null);

  const onBuffer = buffer => {
    console.log('buffring', buffer);
  };
  const onError = error => {
    console.log('error', error);
  };

  const [mute, setMute] = useState(false);

  const [like, setLike] = useState(item.isLike);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setMute(!mute)}
          style={styles.reelContainer}>
          <Video
            videoRef={videoRef}
            onBuffer={onBuffer}
            onError={onError}
            repeat={true}
            resizeMode="cover"
            paused={currentIndex === index ? false : true}
            source={item.video}
            muted={mute}
            style={styles.reels}
          />
        </TouchableOpacity>
        <View style={styles.details}>
          <View>
            <TouchableOpacity>
              <View style={styles.userDetails}>
                <View style={styles.profileImg}>
                  <Image source={item.postProfile} style={styles.img} />
                </View>
                <Text style={styles.userName}>{item.title}</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.captions}>{item.captions}</Text>
            <View style={styles.music}>
              <Text style={styles.audioText}>Original Audio</Text>
            </View>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.icons}>
            <Image
              source={
                like
                  ? require('../assets/icon/Liked.png')
                  : require('../assets/icon/Like.png')
              }
              style={styles.likeImg}
            />
            <Text style={styles.likeCounts}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Image
              source={require('../assets/icon/Comment.png')}
              style={styles.commentsImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Image
              source={require('../assets/icon/share.png')}
              style={styles.shareImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Image
              source={require('../assets/icon/more.png')}
              style={styles.threeDots}
            />
          </TouchableOpacity>
          <View style={styles.audio}>
            <Image
              source={require('../assets/icon/musical-note.png')}
              style={styles.audioImg}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleReel;

const styles = StyleSheet.create({
  mainContainer: {
    height: Dimensions.get('window').height,
    bottom: vh(75),
  },
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reelContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  reels: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  details: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: vw(10),
  },
  userDetails: {
    width: vw(100),
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: vw(30),
    height: vw(32),
    borderRadius: 50,
    backgroundColor: 'white',
    margin: vw(10),
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 50,
  },
  userName: {
    color: 'white',
    fontSize: 16,
  },
  captions: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: vw(10),
  },
  music: {
    flexDirection: 'row',
    padding: vw(10),
  },
  audioText: {
    color: 'white',
  },
  iconsContainer: {
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  likeImg: {
    height: vw(23),
    width: vw(23),
    resizeMode:'contain',
    tintColor: 'white',
  },
  likeCounts: {
    color: 'white',
    top: 5,
  },
  icons: {
    padding: vw(10),
  },
  commentsImg: {
    width: vw(24),
    height: vw(24),
    tintColor: 'white',
    resizeMode: 'contain',
  },
  shareImg: {
    width: vw(24),
    height: vw(24),
    tintColor: 'white',
    resizeMode: 'contain',
  },
  threeDots: {
    width: vw(24),
    height: vw(24),
    tintColor: 'white',
    resizeMode:'contain',
  },
  audio: {
    width: vw(30),
    height: vw(30),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    margin: vw(10),
    alignItems:'center',
    justifyContent:'center',
  },
  audioImg: {
    width: vw(20),
    height: vw(20),
    borderRadius: 10,
    resizeMode: 'contain',
    tintColor:'white',
  },
});
