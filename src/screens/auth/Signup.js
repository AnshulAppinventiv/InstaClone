// import {View, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {Formik} from 'formik';
// import {SignupValidationSchema, signupInitialValue} from './utils';
// import InputBox from '../../components/InputBox';
// import CustomButton from '../../components/CustomButton';
// import {useNavigation} from '@react-navigation/native';
// import {SafeAreaView} from 'react-native-safe-area-context';

// const Signup = () => {
//   const navigation = useNavigation();
//   const handleSignup = values => {
//     console.log(values);
//   };

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         paddingHorizontal: 15,
//         marginTop: 20,
//         backgroundColor: 'white',
//       }}>
//       <View style={{flex: 0.3}}>
//         <Text style={{fontSize: 25, fontWeight: '700', marginBottom: 20}}>
//           What's your mobile number
//         </Text>
//         <Formik
//           initialValues={signupInitialValue}
//           onSubmit={handleSignup}
//           validationSchema={SignupValidationSchema}>
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
//                   placeholder={'Mobile Number'}
//                   onChangeText={handleChange('mobileNumber')}
//                   onBlur={handleBlur('mobileNumber')}
//                   value={values.mobileNumber}
//                   touched={touched.mobileNumber}
//                   errors={errors.mobileNumber}
//                   keyboardType={'numeric'}
//                   maxLength={10}
//                 />
//                 <CustomButton
//                   buttonTitle={'Sign up'}
//                   onPress={handleSubmit}
//                   disabled={!isValid}
//                 />
//               </View>
//             );
//           }}
//         </Formik>
//         <TouchableOpacity style={{marginTop: 15}}>
//           <Text style={{fontSize: 16, textAlign: 'center'}}>
//             Sign up with email
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{justifyContent: 'flex-end', flex: 0.7, marginBottom: 20}}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={{fontSize: 16, textAlign: 'center'}}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Signup;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {validateSignup, signupInitialValue} from './utils'; // Importing validation and initial values

const Signup = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState(signupInitialValue);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleSignup = () => {
    const validationErrors = validateSignup(values); // Custom validation
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(values);
      // You can navigate or handle signup here
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 20,
        backgroundColor: 'white',
      }}>
      <View style={{flex: 0.3}}>
        <Text style={{fontSize: 25, fontWeight: '700', marginBottom: 20}}>
          What's your mobile number
        </Text>

        <InputBox
          placeholder={'Mobile Number'}
          onChangeText={value => handleInputChange('mobileNumber', value)}
          value={values.mobileNumber}
          errors={errors.mobileNumber}
          keyboardType={'numeric'}
          maxLength={10}
        />
        <CustomButton buttonTitle={'Sign up'} onPress={handleSignup} />
        <TouchableOpacity style={{marginTop: 15}}>
          <Text style={{fontSize: 16, textAlign: 'center'}}>
            Sign up with email
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'flex-end', flex: 0.7, marginBottom: 20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 16, textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
