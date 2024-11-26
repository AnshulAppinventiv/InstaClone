import {StyleSheet} from 'react-native';
import {vh} from '../../../utils/dimension';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  subContainer: {
    flex: 0.4,
    marginTop: vh(20),
  },
  text: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: vh(20),
  },
  signUpWithEmailButton: {
    marginTop: vh(15),
  },
  signUpWithEmailText: {
    fontSize: 16,
    textAlign: 'center',
  },
  loginButton: {
    marginBottom: vh(20),
  },
  loginText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
