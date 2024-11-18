import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {vw, vh, SCREEN_WIDTH} from '../utils/dimension';

const ProfileHeader = () => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.accountIdContainer}>
          <Image
            source={require('../assets/icon/lock.png')}
            style={styles.lockImg}
          />
          <Text style={styles.id}>singh_anshulpratap</Text>
          <Image
            source={require('../assets/icon/bottomArrow.png')}
            style={styles.bottomArrow}
          />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              style={styles.addPostImg}
              source={require('../assets/footer/addPost.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleModal}>
            <Image
              style={styles.menuImg}
              source={require('../assets/icon/Menu.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: vh(10),
    paddingRight: vw(16),
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth:1,
  },
  accountIdContainer: {
    width: SCREEN_WIDTH / 1.7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft:vw(8),
  },
  lockImg: {
    width: vw(12),
    height: vw(14),
    resizeMode: 'contain',
  },
  id: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  bottomArrow: {
    width: vw(12),
    height: vw(10),
    resizeMode:'contain',
  },
  iconContainer: {
    width: vw(70),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom:1,
  },
  addPostImg: {
    width: vw(24),
    height: vw(24),
    tintColor: 'black',
    resizeMode: 'contain',
  },
  menuImg: {
    width: vw(20),
    height: vw(20),
    resizeMode:'contain',
    tintColor: 'black',
  },
});
