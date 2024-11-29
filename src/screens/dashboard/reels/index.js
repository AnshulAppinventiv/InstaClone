

import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import ReelsComponent from '../../../components/ReelsComponent';
import { vw,vh,SCREEN_WIDTH,SCREEN_HEIGHT } from '../../../utils/dimension';
import { SafeAreaView } from 'react-native-safe-area-context';
const Reels = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        position: 'relative',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          height:vh(70),
          width:SCREEN_WIDTH,
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: vw(10),
          alignItems:'flex-end',
          // backgroundColor:'red',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Reels
        </Text>
        <Image
          source={require('../../../assets/icon/camera.png')}
          style={{
            width: vw(24),
            height: vw(24),
            tintColor: 'white',
            resizeMode: 'contain',
          }}
        />
      </View>
      <ReelsComponent />
    </SafeAreaView>
  );
};

export default Reels;
