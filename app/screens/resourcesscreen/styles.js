import {StyleSheet} from 'react-native';
import {Color} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  text: {
    color: Color.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
