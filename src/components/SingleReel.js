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
import {vw, vh, SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/dimension';

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
      <View
        style={styles.container}>
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
        <Image
          source={require('../assets/icon/mute.png')}
          style={{
            width: mute ? 20 : 0,
            height: mute ? 20 : 0,
            tintcolor: 'white',
            position: 'absolute',
            backgroundColor: 'rgba(52,52,52,0.6)',
            borderRadius: 50,
            padding: mute ? 20 : 0,
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: SCREEN_WIDTH,
            zIndex: 1,
            bottom: 0,
            padding: vw(10),
          }}>
          <View style={{}}>
            <TouchableOpacity style={{width: vw(150)}}>
              <View
                style={{
                  width: vw(100),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: vw(30),
                    height: vw(32),
                    borderRadius: 50,
                    backgroundColor: 'white',
                    margin: 10,
                  }}>
                  <Image
                    source={item.postProfile}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                      borderRadius: 50,
                    }}
                  />
                </View>
                <Text style={{color: 'white', fontSize: 16}}>{item.title}</Text>
              </View>
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 14, marginHorizontal: 10}}>
              {item.description}
            </Text>
            <View style={{flexDirection: 'row', padding: 10}}>
              <Image
                source={require('../assets/icon/musical-note.png')}
                style={{
                  width: vw(16),
                  height: vw(16),
                  marginRight: 6,
                  tintColor: 'white',
                }}
              />
              <Text style={{color: 'white'}}>Original Audio</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: vh(10),
            right: 0,
          }}>
          <TouchableOpacity
            onPress={() => setLike(!like)}
            style={{padding: 10}}>
            <Image
              source={
                like
                  ? require('../assets/icon/Liked.png')
                  : require('../assets/icon/Like.png')
              }
              style={{
                width: vw(24),
                height: vw(24),
                resizeMode: 'contain',
                tintColor: like ? 'red' : 'white',
              }}
            />
            <Text style={{color: 'white'}}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            <Image
              source={require('../assets/icon/Comment.png')}
              style={{
                width: vw(24),
                height: vw(24),
                tintColor: 'white',
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            <Image
              source={require('../assets/icon/share.png')}
              style={{
                width: vw(24),
                height: vw(24),
                tintColor: 'white',
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            <Image
              source={require('../assets/icon/more.png')}
              style={{
                width: vw(22),
                height: vw(22),
                tintColor: 'white',
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: vw(30),
              height: vw(30),
              borderRadius: 10,
              borderWidth: 2,
              borderColor: 'white',
              margin: vw(10),
            }}>
            <Image
              source={item.postProfile}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                resizeMode: 'cover',
              }}
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
    bottom: 80,
  },
  container:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reelContainer:{
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
reels:{
  width: '100%',
  height: '100%',
  position: 'absolute',
},
});
