module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Other plugins
    'react-native-reanimated/plugin',  // This should be the last one
  ],
};
