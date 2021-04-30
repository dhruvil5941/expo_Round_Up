import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    borderRadius: 25,
    height: 42,
    width: Dimensions.get('window').width / 1.2,
  },
  buttonText: {
    textAlign: 'center',
  },
});
