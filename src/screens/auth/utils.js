
export const loginInitialValue = {
  username: '',
  password: '',
};

// Custom validation function for login form
export const validateLogin = (values) => {
  const errors = {};

  // Validate username
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.username)) {
    errors.username = 'Please enter a valid email address';
  }

  // Validate password
 if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
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