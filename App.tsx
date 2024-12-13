import {StatusBar, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import StackNavigation from './src/navigator/StackNavigation';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <View style={{flex: 1}}>
          <StackNavigation />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
