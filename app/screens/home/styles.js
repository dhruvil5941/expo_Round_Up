import {Dimensions, StyleSheet} from 'react-native';
import {Color} from '../../theme';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  accountValue: {
    color: Color.themeColor,
    fontSize: 13,
    fontWeight: '600',
    marginTop: '5%',
    textAlign: 'center',
  },
  totalAccountValue: {
    color: Color.darkGreen,
    fontSize: 42,
    fontWeight: '800',
    marginTop: '3%',
    textAlign: 'center',
  },
  totalGainView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '3%',
    width: Dimensions.get('window').width / 1.5,
    alignSelf: 'center',
  },
  totalGain: {
    color: 'green',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  totalGainValue: {
    color: 'green',
    fontSize: 13,
    fontWeight: '600',
  },
  portfolioView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
    width: Dimensions.get('window').width - 25,
    alignSelf: 'center',
  },
  textModerately: {
    color: Color.themeColor,
    fontSize: 16,
    fontWeight: '700',
    marginTop: '5%',
    textAlign: 'center',
  },
  portfolioIndicatorView: {
    width: '70%',
    height: 28,
    backgroundColor: Color.darkGray,
    marginTop: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  portfolioIndicatorText: {fontSize: 12, color: Color.black},
  divider: {
    width: Dimensions.get('window').width - 70,
    alignSelf: 'center',
    borderWidth: 0.3,
    borderColor: Color.sparatorColor,
    marginTop: '5%',
  },
  recurringView: {
    color: Color.black,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  monthlyText: {
    color: Color.black,
    fontSize: 14,
  },
  settingsView: {
    width: Dimensions.get('window').width / 1.8,
    alignSelf: 'flex-start',
    height: 28,
    backgroundColor: Color.darkGray,
    marginTop: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginStart: '8%',
  },
  settingsText: {fontSize: 12, color: Color.black},
  stockListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%',
    width: Dimensions.get('window').width / 1.3,
    alignSelf: 'flex-start',
    marginStart: '8.5%',
  },
  contributionText: {
    fontSize: 15,
    color: Color.black,
    fontWeight: 'bold',
    marginTop: '2%',
    marginStart: '9%',
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
  seeMore: {
    width: Dimensions.get('window').width / 1.8,
    alignSelf: 'flex-start',
    height: 28,
    backgroundColor: Color.darkGray,
    marginTop: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginStart: '8%',
    bottom: '2%',
  },
  seeMoreText: {fontSize: 12, color: Color.black},
  loader: {justifyContent: 'center', alignItems: 'center', flex: 1},
});
