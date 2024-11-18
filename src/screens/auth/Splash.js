
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { vw,vh } from '../../utils/dimension';

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
      <Image source={require('../../assets/icon/Instagram.png')} style={styles.logo} />
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: vw(250),
    height: vh(250),
    resizeMode: 'contain',
  },
});
