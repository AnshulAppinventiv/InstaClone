import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          style={styles.instaImg}
          source={require('../assets/Instagram.png')}
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.likeImg}>
          <Image source={require('../assets/Like.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.msgContainer}>
            <Image source={require('../assets/Messanger.png')} />
            <View style={styles.numberOfMsgView}>
              <Text
                style={styles.numberOfMsgText}>
                5
              </Text>
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
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 80,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  instaImg: {
    height: 28,
    width: 110,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  likeImg: {
    marginRight: 15,
  },
  msgContainer: {
    position: 'relative',
  },
  numberOfMsgView: {
    position: 'absolute',
    bottom: 12,
    left: 13,
  },
  numberOfMsgText:{
    backgroundColor: 'red',
    paddingHorizontal: 5,
    borderRadius: 10,
  },
});
