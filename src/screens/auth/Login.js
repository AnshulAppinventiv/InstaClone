import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import {loginInitialValue, validateLogin} from './utils';
import {useNavigation} from '@react-navigation/native';
import {vh, vw} from '../../utils/dimension';

const Login = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState({loginInitialValue});
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
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
        [field]: undefined, // Clear the error for this field
      });
    }
  };

  const handleLogin = () => {
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Login successful with values:', values);
      navigation.navigate('Dashboard');
    } else {
      console.log('Validation failed', validationErrors);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image
          source={require('../../assets/icon/Instagram.png')}
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

          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>

          <CustomButton
            buttonTitle={'Login'}
            onPress={handleLogin}
            disabled={!values.username || !values.password}
          />
        </View>

        <View style={styles.facebookContainer}>
          <Image
            source={require('../../assets/icon/facebook.png')}
            style={styles.facebookLogo}
          />
          <TouchableOpacity style={styles.facebook}>
            <Text style={styles.facebookText}>Log in with Facebook</Text>
          </TouchableOpacity>
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    marginBottom: vh(40),
    resizeMode:'contain',
    alignSelf: 'center',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  forgotPass: {
    marginTop: vh(14),
    alignSelf: 'flex-end',
  },
  forgotPassText: {
    fontSize: 15,
    color: '#3797EF',
  },
  facebookContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: vh(40),
  },
  facebookLogo: {
    width: vw(17),
    height: vh(17),
    marginRight: vw(10),
  },
  facebookText: {
    fontSize: 14,
    fontWeight: 600,
    color: '#3797EF',
  },
  line: {
    width: vw(140),
    height: 1,
    borderWidth: 1,
    marginTop: vh(10),
    opacity: 0.1,
  },
  orContainer: {
    marginHorizontal: vw(20),
  },
  orText: {
    fontSize: 20,
    color: 'grey',
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vh(40),
  },
  signUpContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: vh(50),
  },
  newAccountText: {
    fontSize: 16,
  },
  signupText: {
    fontSize: 16,
    color: '#3797EF',
  },
  error: {
    color: 'red',
  },
  inputView: {
    borderWidth: 1,
    width: vw(343),
    height: vh(44),
    justifyContent:'center',
    borderColor: '#ccc',
    borderRadius: vw(5),
    marginTop:vh(16),
    paddingHorizontal: vw(10),
    fontSize: 16,
  },
});
