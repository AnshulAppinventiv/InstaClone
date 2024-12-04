import React from 'react';
import {View, Text, Image} from 'react-native';
import ReelsComponent from '../../../components/ReelsComponent';
import { styles } from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
const Reels = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.reelsText}>Reels</Text>
        <Image
          source={require('../../../assets/icon/camera.png')}
          style={styles.cameraImg}
        />
      </View>
      <ReelsComponent />
    </SafeAreaView>
  );
};

export default Reels;


