import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimension';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    marginBottom: vw(40),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  forgotPass: {
    marginTop: vw(14),
    alignSelf: 'flex-end',
  },
  forgotPassText: {
    fontSize: 15,
    color: '#3797EF',
  },
  facebookContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: vh(40),
  },
  facebookLogo: {
    width: vw(17),
    height: vh(17),
    marginRight: vw(10),
  },
  facebookText: {
    fontSize: 14,
    fontWeight: 600,
    color: '#3797EF',
  },
  line: {
    width: vw(140),
    height: 1,
    borderWidth: 1,
    marginTop: vh(10),
    opacity: 0.1,
  },
  orContainer: {
    marginHorizontal: vw(20),
  },
  orText: {
    fontSize: vw(20),
    color: 'grey',
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vh(40),
  },
  signUpContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: vh(50),
  },
  newAccountText: {
    fontSize: 16,
  },
  signupText: {
    fontSize: 16,
    color: '#3797EF',
  },
  error: {
    color: 'red',
  },
  inputView: {
    borderWidth: 1,
    // width: vw(343),
    height: vw(44),
    justifyContent: 'center',
    borderColor: '#ccc',
    borderRadius: vw(5),
    marginTop: vh(16),
    paddingHorizontal: vw(10),
    fontSize: 16,
  },
});
