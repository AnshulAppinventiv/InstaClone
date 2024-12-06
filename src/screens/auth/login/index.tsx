/* eslint-disable @typescript-eslint/no-unused-vars */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputBox from '../../../components/InputBox';
import CustomButton from '../../../components/CustomButton';
import {validateLogin} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { StackParamList } from '../../../navigator/StackNavigation';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


type LoginProps = StackNavigationProp<StackParamList, 'Login'>;
interface LoginValues {
  username: string;
  password: string;
}

const Login = () => {
  const navigation = useNavigation<LoginProps>();
  const [values, setValues] = useState<LoginValues>({username: '', password: ''});
  const [errors, setErrors] = useState<{[key: string]: string | undefined}>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [firebaseError, setFirebaseError] = useState<string>('');

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setIsLoggedIn(true);
        navigation.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        });
      }
    };
    checkLoginStatus();
  }, [navigation]);

  const handleChange = (field:string, value:number) => {
    setValues({
      ...values,
      [field]: value,
    });
    if (value.trim() === '') {
      setErrors({
        ...errors,
        [field]: `${
          field === 'username' ? 'Username' : 'Password'
        } is required`,
      });
    } else {
      setErrors({
        ...errors,
        [field]: undefined,
      });
    }
  };

  const handleLogin = async () => {
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await auth().signInWithEmailAndPassword(
          values.username,
          values.password,
        );
        await AsyncStorage.setItem('userToken', 'your_auth_token');
        setIsLoggedIn(true);
        console.log('Login successful');
        navigation.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        });
      } catch (error:any) {
        if (error.code === 'auth/user-not-found') {
          setFirebaseError('No user found with this email');
        } else if (error.code === 'auth/wrong-password') {
          setFirebaseError('Incorrect password');
        } else if (error.code === 'auth/invalid-email') {
          setFirebaseError('Invalid email format');
        } else {
          setFirebaseError('Login failed. Please try again.');
        }
        console.error(error);
      }
    } else {
      console.log('Validation failed', validationErrors);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image
          source={require('../../../assets/icon/Instagram.png')}
          style={styles.logoImage}
        />
        <View>
          <InputBox
            placeholder={'Username, email address or mobile number'}
            onChangeText={text => handleChange('username', text)}
            value={values.username}
            style={styles.inputView}
            touched={!!errors.username}
            errors={errors.username}
          />

          <InputBox
            placeholder={'Password'}
            onChangeText={text => handleChange('password', text)}
            value={values.password}
            style={styles.inputView}
            touched={!!errors.password}
            errors={errors.password}
            secureTextEntry
          />

          {firebaseError ? (
            <Text style={styles.errorText}>{firebaseError}</Text>
          ) : null}

          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>

          <CustomButton
            buttonTitle={'Login'}
            onPress={handleLogin}
            disabled={!values.username || !values.password}
          />
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <View style={styles.orContainer}>
            <Text style={styles.orText}>OR</Text>
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.newAccountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupText}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
