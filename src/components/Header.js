import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {vh, vw, SCREEN_WIDTH, SCREEN_HEIGHT} from '../utils/dimension';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.mainContainer]}>
      <Image
        style={styles.instaImg}
        source={require('../assets/icon/Instagram.png')}
      />
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.likeImg}>
          <Image source={require('../assets/icon/Like.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
          <View style={styles.msgContainer}>
            <Image source={require('../assets/icon/share.png')} />
            <View style={styles.numberOfMsgView}>
              <Text style={styles.numberOfMsgText}>4</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 12.0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(15),
  },
  instaImg: {
    width: vw(124),
    height: vh(40),
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vh(6),
  },
  likeImg: {
    width: vw(24),
    height: vh(24),
    resizeMode: 'contain',
    marginRight: vw(15),
  },
  msgContainer: {
    width: vw(24),
    height: vh(24),
    position: 'relative',
  },
  numberOfMsgView: {
    position: 'absolute',
    bottom: vh(18),
    left: vw(15),
  },
  numberOfMsgText: {
    height: vw(18),
    width: vw(18),
    backgroundColor: 'red',
    textAlign: 'center',
    borderRadius: vw(10),
  },
});
