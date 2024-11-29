/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import {vw, vh, SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/dimension';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Feather from 'react-native-vector-icons/Feather';

const SingleReel = ({item, index, currentIndex}) => {
//   const windowWidth = Dimensions.get('window').width;
//   const windowHeight = Dimensions.get('window').height;

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
    <View style={{backgroundColor: 'black', paddingBottom: vh(50)}}>
      <View
        style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT - 60,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          resizeMode: 'contain',
        }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setMute(!mute)}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}>
          <Video
            videoRef={videoRef}
            onBuffer={onBuffer}
            onError={onError}
            repeat={true}
            resizeMode="cover"
            paused={currentIndex === index ? false : true}
            source={item.video}
            muted={mute}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
          />
        </TouchableOpacity>
        <Ionic
          name="volume-mute"
          style={{
            fontSize: mute ? 20 : 0,
            color: 'white',
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
              <Ionic
                name="ios-musical-note"
                style={{color: 'white', fontSize: 16}}
              />
              <Text style={{color: 'white'}}>Original Audio</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: vh(10), //edited
            right: 0,
          }}>
          <TouchableOpacity
            onPress={() => setLike(!like)}
            style={{padding: 10}}>
            {/* <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{color: like ? 'red' : 'white', fontSize: 25}}
          /> */}
            <Image
              source={
                like
                  ? require('../assets/icon/Liked.png')
                  : require('../assets/icon/Like.png')
              }
              style={{fontSize: 25, tintColor: 'white'}}
            />
            <Text style={{color: 'white'}}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            {/* <Ionic
            name="ios-chatbubble-outline"
            style={{color: 'white', fontSize: 25}}
          /> */}
            <Image
              source={require('../assets/icon/Comment.png')}
              style={{
                width: 24,
                height: 25,
                tintColor: 'white',
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            {/* <Ionic
            name="paper-plane-outline"
            style={{color: 'white', fontSize: 25}}
          /> */}
            <Image
              source={require('../assets/icon/share.png')}
              style={{
                width: 24,
                height: 25,
                tintColor: 'white',
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            {/* <Feather
            name="more-vertical"
            style={{color: 'white', fontSize: 25}}
          /> */}
            <Image
              source={require('../assets/icon/more.png')}
              style={{
                width: 22,
                height: 22,
                tintColor: 'white',
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: 'white',
              margin: 10,
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
