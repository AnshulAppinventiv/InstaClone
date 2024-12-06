import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {vh, vw} from '../utils/dimension';
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
        <TouchableOpacity style={styles.likeImg} onPress={()=>navigation.navigate('NotificationScreen')}>
          <Image source={require('../assets/icon/Like.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(15),
    paddingVertical:vh(6),
    marginTop:vh(8),
  },
  instaImg: {
    width: vw(120),
    height: vw(40),
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
    marginRight: vw(15),
  },
  msgContainer: {
    width: vw(24),
    height: vw(24),
    position: 'relative',
  },
  numberOfMsgView: {
    width:vw(18),
    height:vw(18),
    position: 'absolute',
    bottom: vw(17),
    left: vw(15),
    backgroundColor:'red',
    borderRadius: vw(10),
    alignItems:'center',
    justifyContent:'center',
  },
  numberOfMsgText: {
    fontSize:14,
    textAlign: 'center',
  },
});
