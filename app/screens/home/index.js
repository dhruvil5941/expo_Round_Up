import React, {Component} from 'react';
import {Dimensions, FlatList, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {homeDataRequest} from '../../redux/home/actions';
import PieChart from '../../components/piechart';
import Stocks from '../../components/stocklistprice';
import Loader from '../../components/loader';

class Home extends Component {
  componentDidMount() {
    this.props.homeDataRequest();
  }

  render() {
    const {homeData} = this.props;
    const {accountValue, totalGain, contributions} = homeData;
    if (!homeData) {
      return (
        <View style={styles.loader}>
          <Loader />
        </View>
      );
    } else {
      return (
        <View style={styles.mainView}>
          <ScrollView>
            <Text style={styles.accountValue}>Your Account Value</Text>
            <Text style={styles.totalAccountValue}>{accountValue}</Text>
            <View style={styles.totalGainView}>
              <Text style={styles.totalGain}>Total Gain :</Text>
              <Text style={styles.totalGainValue}>{totalGain}</Text>
            </View>
            <View style={styles.portfolioView}>
              <View style={{flexDirection: 'column'}}>
                <Text>Your Portfolio</Text>
                <Text style={styles.textModerately}>
                  Moderately Conservation
                </Text>
                <View style={styles.portfolioIndicatorView}>
                  <Text style={styles.portfolioIndicatorText}>Portfolio</Text>
                </View>
              </View>
              <View>
                <PieChart
                  radius={32}
                  sections={[
                    {
                      percentage: 10,
                      color: '#C70039',
                    },
                    {
                      percentage: 20,
                      color: '#44CD40',
                    },
                    {
                      percentage: 30,
                      color: '#404FCD',
                    },
                    {
                      percentage: 40,
                      color: '#EBD22F',
                    },
                  ]}
                  dividerSize={7}
                />
              </View>
            </View>
            <View style={styles.divider} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '3%',
                width: Dimensions.get('window').width - 70,
                alignSelf: 'center',
              }}>
              <Text style={styles.recurringView}>Recurring Contribution :</Text>
              <Text style={styles.monthlyText}>+$200 Monthly</Text>
            </View>
            <View style={styles.settingsView}>
              <Text style={styles.settingsText}>
                Recurring Contribution Settings
              </Text>
            </View>
            <View style={styles.divider} />
            <Text style={styles.contributionText}>Recurring Contribution</Text>
            <FlatList
              data={contributions}
              renderItem={({item}) => (
                <View style={styles.stockListView} key={item.index}>
                  <Stocks
                    name={item.name}
                    percentage={item.amount}
                    nameStyle={styles.stockName}
                    percentageStyle={styles.stockPrice}
                  />
                </View>
              )}
              keyExtractor={item => item.index}
            />
            <View style={styles.seeMore}>
              <Text style={styles.seeMoreText}>See More Contribution</Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    homeData: state.homeReducer.homeData,
    homeDataError: state.homeReducer.homeDataError,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    homeDataRequest: () => dispatch(homeDataRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
