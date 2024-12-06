import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../../navigator/StackNavigation';
import {styles} from './styles';


type SignupProps = StackNavigationProp<StackParamList, 'Signup'>;

const Signup = () => {
  const navigation = useNavigation<SignupProps>();
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
            console.log('signup');
          }}
          buttonTitle={'Sign up with email'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Signup;
