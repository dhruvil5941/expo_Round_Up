import {Dimensions, StyleSheet} from 'react-native';
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
  stockListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    width: Dimensions.get('window').width / 1.4,
    alignSelf: 'flex-start',
    marginStart: '5%',
  },
  stockName: {
    color: Color.black,
    fontSize: 14,
    textAlign: 'center',
  },
  stockPrice: {
    color: Color.black,
    fontSize: 14,
  },
  buttonView: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
  },
  newButtonView: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: Color.white,
    fontSize: 16,
  },
  roundUpView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 1.4,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    alignItems: 'center',
    flex: 1,
  },
  roundUpText: {fontSize: 20, fontWeight: '400'},
  monthView: {
    borderWidth: 0.5,
    borderColor: Color.lightGray,
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  monthText: {fontSize: 13, color: Color.secondGray},
  priceText: {
    textAlign: 'center',
    fontSize: 24,
    color: Color.lighterGreen,
    marginTop: '5%',
    fontWeight: '600',
  },
  decText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: '5%',
    color: Color.secondGray,
    width: Dimensions.get('window').width - 50,
  },
  contributionView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 1.2,
    alignSelf: 'flex-start',
    marginStart: '5%',
    marginTop: '5%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  contributionText: {fontSize: 20, fontWeight: 'bold'},
  pickerView: {
    borderWidth: 0.5,
    borderColor: Color.lightGray,
    width: '50%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginStart: '10%',
  },
  pickerIcon: {
    backgroundColor: 'transparent',
    borderTopWidth: 5,
    borderTopColor: 'gray',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
    marginRight: '5%',
    top: '85%',
  },
  loader: {justifyContent: 'center', alignItems: 'center', flex: 1},
  btnView: {marginTop: '5%', bottom: '2%'},
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 5,
    color: Color.black,
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 5,
    color: Color.black,
    paddingRight: 30,
  },
});
