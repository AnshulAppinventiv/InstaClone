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
  mobileInput:{
    borderWidth: 1,
    width: vw(343),
    height: vw(50),
    marginTop: vh(26),
    borderColor: '#F4F4F4',
    backgroundColor: '#F4F4F4',
    borderRadius: vh(18),
    paddingHorizontal: vw(14),
    fontSize: vw(18),
    alignSelf: 'center',
    textAlignVertical:'center',
  },
  loginButton: {
    borderWidth:1,
    padding:10,
  },
  loginText: {
    fontSize: 14,
    textAlign: 'center',
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
  errorText:{
    color:'red',
  },
});
