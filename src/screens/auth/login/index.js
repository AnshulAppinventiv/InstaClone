// import {Image, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import InputBox from '../../../components/InputBox';
// import CustomButton from '../../../components/CustomButton';
// import {loginInitialValue, validateLogin} from '../utils';
// import {useNavigation} from '@react-navigation/native';
// import {styles} from './styles';

// const Login = () => {
//   const navigation = useNavigation();
//   const [values, setValues] = useState({loginInitialValue});
//   const [errors, setErrors] = useState({});

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

//   const handleLogin = () => {
//     const validationErrors = validateLogin(values);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       console.log('Login successful with values:', values);
//       navigation.reset({
//         index: 0,
//         routes: [{name: 'Dashboard'}],
//       });
//     } else {
//       console.log('Validation failed', validationErrors);
//     }
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.subContainer}>
//         <Image
//           source={require('../../../assets/icon/Instagram.png')}
//           style={styles.logoImage}
//         />
//         <View>
//           <InputBox
//             placeholder={'Username, email address or mobile number'}
//             onChangeText={text => handleChange('username', text)}
//             value={values.username}
//             style={styles.inputView}
//             touched={!!errors.username}
//             errors={errors.username}
//           />

//           <InputBox
//             placeholder={'Password'}
//             onChangeText={text => handleChange('password', text)}
//             value={values.password}
//             style={styles.inputView}
//             touched={!!errors.password}
//             errors={errors.password}
//             secureTextEntry
//           />

//           <TouchableOpacity style={styles.forgotPass}>
//             <Text style={styles.forgotPassText}>Forgot Password?</Text>
//           </TouchableOpacity>

//           <CustomButton
//             buttonTitle={'Login'}
//             onPress={handleLogin}
//             disabled={!values.username || !values.password}
//           />
//         </View>

//         <View style={styles.facebookContainer}>
//           <Image
//             source={require('../../../assets/icon/facebook.png')}
//             style={styles.facebookLogo}
//           />
//           <TouchableOpacity style={styles.facebook}>
//             <Text style={styles.facebookText}>Log in with Facebook</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.dividerContainer}>
//           <View style={styles.line} />
//           <View style={styles.orContainer}>
//             <Text style={styles.orText}>OR</Text>
//           </View>
//           <View style={styles.line} />
//         </View>
//         <View style={styles.signUpContainer}>
//           <Text style={styles.newAccountText}>Don't have an account?</Text>
//           <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//             <Text style={styles.signupText}> Sign up</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Login;




import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../../components/InputBox';
import CustomButton from '../../../components/CustomButton';
import {loginInitialValue, validateLogin} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import auth from '@react-native-firebase/auth'; // Import Firebase authentication

const Login = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState({loginInitialValue});
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState('');

  const handleChange = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
    if (value.trim() === '') {
      setErrors({
        ...errors,
        [field]: `${field === 'username' ? 'Username' : 'Password'} is required`,
      });
    } else {
      setErrors({
        ...errors,
        [field]: undefined,
      });
    }
  };

  const handleLogin = () => {
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Use Firebase to log in
      auth()
        .signInWithEmailAndPassword(values.username, values.password)
        .then(() => {
          console.log('Login successful');
          navigation.reset({
            index: 0,
            routes: [{name: 'Dashboard'}],
          });
        })
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
            setFirebaseError('No user found with this email');
          } else if (error.code === 'auth/wrong-password') {
            setFirebaseError('Incorrect password');
          } else {
            setFirebaseError('Login failed. Please try again.');
          }
          console.error(error);
        });
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

        <View style={styles.facebookContainer}>
          <Image
            source={require('../../../assets/icon/facebook.png')}
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
