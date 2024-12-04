import {View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import StackNavigation from './src/navigator/StackNavigation';

const App = () => {
  return (
    <Provider store={store}>
    <View style={{flex: 1}}>
      <StackNavigation />
    </View>
    </Provider>
  );
};

export default App;
