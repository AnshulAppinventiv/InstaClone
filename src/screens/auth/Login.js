
// import {
//   Image,
//   StyleSheet,
//   SafeAreaView,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import InputBox from '../../components/InputBox';
// import CustomButton from '../../components/CustomButton';
// import {Formik} from 'formik';
// import {loginInitialValue, validationSchema} from './utils';
// import {useNavigation} from '@react-navigation/native';

// const Login = () => {
//   const navigation = useNavigation();
//   const handleLogin = values => {
//     console.log(values);
//     navigation.navigate('Dashboard');
//   };

//   return (
//     <SafeAreaView style={styles.mainContainer}>
//       <View style={styles.subContainer}>
//         <Image
//           source={require('../../assets/Instagram.png')}
//           style={styles.logoImage}
//         />
//         <Formik
//           initialValues={loginInitialValue}
//           onSubmit={handleLogin}
//           validationSchema={validationSchema}>
//           {({
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             values,
//             touched,
//             errors,
//             isValid,
//           }) => {
//             return (
//               <View>
//                 <InputBox
//                   placeholder={'Username, email address or mobile number'}
//                   onChangeText={handleChange('username')}
//                   onBlur={handleBlur('username')}
//                   value={values.username}
//                   touched={touched.username}
//                   errors={errors.username}
//                 />
//                 <InputBox
//                   placeholder={'Password'}
//                   onChangeText={handleChange('password')}
//                   onBlur={handleBlur('password')}
//                   value={values.password}
//                   touched={touched.password}
//                   errors={errors.password}
//                   secureTextEntry
//                 />
//                 <TouchableOpacity style={styles.forgotPass}>
//                   <Text style={styles.forgotPassText}>Forgot Password?</Text>
//                 </TouchableOpacity>
//                 <CustomButton
//                   buttonTitle={'Login'}
//                   onPress={handleSubmit}
//                   disabled={!isValid}
//                 />
//               </View>
//             );
//           }}
//         </Formik>
//         <View style={styles.facebookContainer}>
//           <Image
//             source={require('../../assets/facebook.png')}
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
//       </View>
//       <View style={styles.signUpContainer}>
//         <Text style={styles.newAccountText}>Don't have an account?</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//           <Text style={styles.signupText}> Sign up</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Login;



import {
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React,{useState} from 'react';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import {loginInitialValue, validateLogin} from './utils';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  // State to manage input values and errors
  const [values, setValues] = useState({loginInitialValue});
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  // Validate the form and handle submission
  const handleLogin = () => {
    const validationErrors = validateLogin(values); // Validate using your custom function from utils
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Login successful with values:', values);
      navigation.navigate('Dashboard');
    } else {
      console.log('Validation failed', validationErrors);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image
          source={require('../../assets/Instagram.png')}
          style={styles.logoImage}
        />
        <View>
          {/* Username Input */}
          <InputBox
            placeholder={'Username, email address or mobile number'}
            onChangeText={(text) => handleChange('username', text)}
            value={values.username}
            touched={!!errors.username}
            errors={errors.username}
          />
          {errors.username && <Text style={{ color: 'red' }}>{errors.username}</Text>}

          {/* Password Input */}
          <InputBox
            placeholder={'Password'}
            onChangeText={(text) => handleChange('password', text)}
            value={values.password}
            touched={!!errors.password}
            errors={errors.password}
            secureTextEntry
          />
          {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

          {/* Forgot Password Link */}
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <CustomButton
            buttonTitle={'Login'}
            onPress={handleLogin}
            disabled={!values.username || !values.password} // Disable if either field is empty
          />
        </View>

        {/* Facebook Login */}
        <View style={styles.facebookContainer}>
          <Image
            source={require('../../assets/facebook.png')}
            style={styles.facebookLogo}
          />
          <TouchableOpacity style={styles.facebook}>
            <Text style={styles.facebookText}>Log in with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <View style={styles.orContainer}>
            <Text style={styles.orText}>OR</Text>
          </View>
          <View style={styles.line} />
        </View>
      </View>

      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={styles.newAccountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    marginBottom: 40,
    alignSelf: 'center',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  forgotPass: {
    marginTop: 14,
    alignSelf: 'flex-end',
  },
  forgotPassText: {
    fontSize: 15,
    color: '#3797EF',
  },
  facebookContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 40,
  },
  facebookLogo: {
    width: 17,
    height: 17,
    marginRight: 10,
  },
  facebookText: {
    fontSize: 14,
    fontWeight: 600,
    color: '#3797EF',
  },
  line: {
    width: 140,
    height: 1,
    borderWidth: 1,
    marginTop: 10,
    opacity: 0.1,
  },
  orContainer: {
    marginHorizontal: 20,
  },
  orText: {
    fontSize: 20,
    color: 'grey',
  },

  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  signUpContainer: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignSelf:'center',
  },
  newAccountText: {
    fontSize: 16,
  },
  signupText: {
    fontSize: 16,
    color: '#3797EF',
  },
});
