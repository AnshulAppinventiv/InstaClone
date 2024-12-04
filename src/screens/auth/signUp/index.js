import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const Signup = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNextPress = () => {
    if (mobileNumber.length === 10) {
      setErrorMessage('');
      navigation.navigate('Login');
    } else {
      setErrorMessage('Mobile Number should consist of 10 digits');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>What's your mobile number?</Text>

        <TextInput
          placeholder={'Mobile Number'}
          onChangeText={value => setMobileNumber(value)}
          value={mobileNumber} 
          style={styles.mobileInput}
          keyboardType={'numeric'}
          maxLength={10}
        />
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <CustomButton buttonTitle={'Next'} onPress={handleNextPress} />

        <CustomButton
          onPress={() => {
            navigation.navigate('SignupEmail');
            console.log('signup')
          }}
          buttonTitle={'Sign up with email'}
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.loginText}>I already have an account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Signup;
