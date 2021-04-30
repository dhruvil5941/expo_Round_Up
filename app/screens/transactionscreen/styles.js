import {Dimensions, StyleSheet} from 'react-native';
import {Color} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  roundUpText: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: '5%',
  },
  roundUpOpstion: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: '5%',
    marginStart: '5%',
  },
  buttonView: {
    width: '32%',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    marginStart: '1%',
  },
  newbuttonView: {
    // backgroundColor: '#e0e0e0',
    width: '33%',
    height: 35,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  monthView: {
    width: '50%',
    borderRadius: 25,
    alignItems: 'center',
    marginStart: '5%',
    marginTop: '5%',
    height: 40,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Color.lightGray,
  },
  roundAllDisable: {
    borderWidth: 0.5,
    borderColor: Color.lightGray,
    width: '35%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: '5%',
    marginStart: '20%',
    backgroundColor: Color.secondaryColor,
  },
  roundAllActive: {
    borderWidth: 0.5,
    borderColor: Color.lightGray,
    width: '35%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: '5%',
    marginStart: '20%',
    backgroundColor: Color.lightGreen,
  },
  monthTextDisable: {fontSize: 13, color: Color.secondGray},
  monthTextActive: {fontSize: 13, color: Color.white},
  enableView: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginStart: '5%',
    marginTop: '5%',
  },
  enableText: {fontWeight: 'bold'},
  nearestView: {
    flexDirection: 'row',
    marginStart: '5%',
    marginTop: '5%',
    width: Dimensions.get('window').width - 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  nearestPropOne: {
    width: '32%',
    justifyContent: 'center',
    overflow: 'hidden',
    marginStart: '1%',
    borderWidth: 0.3,
    borderColor: Color.lightGray,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
  },
  nearestText: {textAlign: 'center'},
  transactionView: {
    marginTop: '5%',
    width: Dimensions.get('window').width - 50,
    alignItems: 'center',
    marginStart: '5%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  picker: {
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
  listView: {
    flex: 1,
    alignItems: 'center',
    margin: '5%',
  },
  listDataView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '2%',
    marginTop: '5%',
  },
  listAmount: {
    width: '35%',
    textAlign: 'center',
  },
  amountView: {
    color: Color.greenTwo,
    width: '30%',
    textAlign: 'center',
  },
  amountRound: {
    width: '30%',
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: Color.lightGray,
    backgroundColor: Color.greenThird,
    borderRadius: 25,
    padding: '2%',
    alignItems: 'center',
  },
  roundText: {
    textAlign: 'center',
    color: Color.white,
    fontWeight: '700',
  },
  selectDollar: {
    width: '30%',
    justifyContent: 'center',
    // height: 50,
    alignItems: 'center',
    padding: '2%',
  },
  selectDollarText: {
    color: Color.greenTwo,
    textAlign: 'center',
  },
  loader: {marginTop: '30%'},
  stockName: {width: '35%'},
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: Color.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: Color.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
