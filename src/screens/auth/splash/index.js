/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      navigation.navigate('Login');
    }, 1000);

    return () => clearTimeout(timer);
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
