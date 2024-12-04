/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }
    };
    setTimeout(() => {
      checkLoginStatus();
    }, 1000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icon/Instagram.png')}
        style={styles.logo}
      />
    </View>
  );
};
export default SplashScreen;
