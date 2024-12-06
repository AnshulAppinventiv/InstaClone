import {StyleSheet} from 'react-native';
import {vh,vw} from '../../../utils/dimension';

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
  inputView: {
    borderWidth: 1,
    width: vw(343),
    height: vw(44),
    justifyContent: 'center',
    borderColor: '#ccc',
    borderRadius: vw(5),
    marginTop: vh(16),
    paddingHorizontal: vw(10),
    fontSize: 16,
    color:'grey',
  },
  loginButton: {
    borderWidth:1,
    padding:10,
  },
  loginText: {
    fontSize: 14,
    textAlign: 'center',
  },
  errorText:{
    color:'red',
  },
});
