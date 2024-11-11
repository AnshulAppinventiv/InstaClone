// import * as yup from 'yup';

// export const loginInitialValue = {
//   username: '',
//   password: '',
// };

// export const validationSchema = yup.object().shape({
//   username: yup.string().required('Username is required'),
//   password: yup.string().required('Password is required'),
// });

// export const signupInitialValue = {
//   mobileNumber: '',
// };

// export const SignupValidationSchema = yup.object().shape({
//   mobileNumber: yup
//     .string()
//     .min(
//       10,
//       ({min}) =>
//         `${'Mobile number must be'} ${min} ${'character'}`,
//     )
//     .required('Mobile Number is required')
//     .matches(/^[789]\d{9}$/, 'Mobile number should be start from 7,8,9'),
// });


// utils/validation.js

// Initial values for the login form
export const loginInitialValue = {
  username: '',
  password: '',
};

// Custom validation function for login form
export const validateLogin = (values) => {
  const errors = {};

  // Validate username
  if (!values.username) {
    errors.username = 'Username is required';
  }

  // Validate password
  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors; // Return errors object, if no errors, it will be an empty object
};
export const signupInitialValue = {
  mobileNumber: '',
};

// Simple validation function for signup form
export const validateSignup = (values) => {
  const errors = {};

  // Validate mobile number
  if (!values.mobileNumber) {
    errors.mobileNumber = 'Mobile Number is required';
  } else if (!/^[789]\d{9}$/.test(values.mobileNumber)) {
    errors.mobileNumber = 'Mobile number should start with 7, 8, or 9';
  } else if (values.mobileNumber.length !== 10) {
    errors.mobileNumber = 'Mobile number must be 10 characters';
  }

  return errors; // Return errors object
};