// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   TextInput,
// } from 'react-native';
// import CustomButton from '../../../components/CustomButton';
// import {useNavigation} from '@react-navigation/native';
// import {styles} from './styles';
// import InputBox from '../../../components/InputBox';

// const SignupEmail = () => {
//   const navigation = useNavigation();
//   const [errorMessage, setErrorMessage] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [values, setValues] = useState({});
//   const [errors, setErrors] = useState({});

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const handleNextPress = () => {
//     if (!emailRegex.test(email)) {
//       setErrorMessage('Please enter a valid email address');
//     } else {
//       navigation.navigate('Login');
//     }
//   };
//   const handleChange = (field, value) => {
//     setValues({
//       ...values,
//       [field]: value,
//     });
//     if (value.trim() === '') {
//       setErrors({
//         ...errors,
//         [field]: `${
//           field === 'username' ? 'Username' : 'Password'
//         } is required`,
//       });
//     } else {
//       setErrors({
//         ...errors,
//         [field]: undefined,
//       });
//     }
//   };

//   return (
//     <SafeAreaView style={styles.mainContainer}>
//       <View style={styles.subContainer}>
//         <Text style={styles.text}>What's your Email Id?</Text>

//         <TextInput
//           placeholder={'Email Id'}
//           value={email}
//           onChangeText={value => setEmail(value)}
//           style={styles.mobileInput}
//           keyboardType={'email-address'}
//           maxLength={10}
//         />
//         {/* {errorMessage ? (
//             <Text style={styles.errorText}>{errorMessage}</Text>
//           ) : null} */}

//         <InputBox
//           placeholder={'Password'}
//           onChangeText={value => setPassword(value)}
//           value={password}
//           // style={styles.inputView}
//           // touched={!!errors.password}
//           // errors={errors.password}
//           secureTextEntry
//         />
//         <CustomButton buttonTitle={'Next'} onPress={handleNextPress} />
//         <CustomButton
//           buttonTitle={'Sign up with Mobile Number'}
//           onPress={() => navigation.goBack()}
//         />
//       </View>

//       {/* <TouchableOpacity
//           style={styles.loginButton}>
//           <Text style={styles.loginText}>I already have an account</Text>
//         </TouchableOpacity> */}
//     </SafeAreaView>
//   );
// };
// export default SignupEmail;

import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import InputBox from '../../../components/InputBox';
import auth from '@react-native-firebase/auth'; // Import Firebase authentication

const SignupEmail = () => {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleNextPress = () => {
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }

    // Firebase authentication
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setErrorMessage('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          setErrorMessage('That email address is invalid!');
        } else {
          setErrorMessage('Something went wrong. Please try again.');
        }
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>What's your Email Id?</Text>

        <TextInput
          placeholder={'Email Id'}
          value={email}
          onChangeText={value => setEmail(value)}
          style={styles.mobileInput}
          keyboardType={'email-address'}
        />

        <InputBox
          placeholder={'Password'}
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry
        />

        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

        <CustomButton buttonTitle={'Next'} onPress={handleNextPress} />
        <CustomButton
          buttonTitle={'Sign up with Mobile Number'}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupEmail;
