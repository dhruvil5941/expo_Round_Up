import React, {Component} from 'react';
import {FlatList, Platform, ScrollView, Text, View} from 'react-native';
import styles, {pickerSelectStyles} from './styles';
import Button from '../../components/button';
import {Color} from '../../theme';
import {connect} from 'react-redux';
import Stocks from '../../components/stocklistprice';
import Loader from '../../components/loader';
import DropDown from "../../components/Dropdown";

class ContributionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownValue: 'Last 7 days',
    };
  }

  render() {
    const {homeData, navigation} = this.props;
    const {contributions} = homeData;
    const {dropdownValue} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.roundUpView}>
            <Text style={styles.roundUpText}>Round Up Pool</Text>
            <View style={styles.monthView}>
              <Text style={styles.monthText}>March 2021</Text>
            </View>
          </View>
          <Text style={styles.priceText}>$92.38</Text>
          <Text style={styles.decText}>
            Funds in pool will be invested into recommended portfolio on the end
            of each month, and we will charge this amount to your linked bank
            account.
          </Text>
          <View style={styles.contributionView}>
            <Text style={styles.contributionText}>Contribution</Text>
            <View style={styles.pickerView}>
              <DropDown
                onValueChange={value => this.setState({dropdownValue: value})}
                selectedValue={dropdownValue}
                value={dropdownValue}
                items={[
                  {label: 'Last 7 days', value: 'Last 7 days'},
                  {label: 'Last 14 days', value: 'Last 14 days'},
                  {label: 'Last month', value: 'Last month'},
                ]}
                style={{
                  ...pickerSelectStyles,
                  iconContainer: {
                    top: Platform.OS === 'ios' ? 5 : 22,
                    right: 5,
                  },
                }}
                Icon={() => {
                  return <View style={styles.pickerIcon} />;
                }}
              />
            </View>
          </View>
          {!homeData ? (
            <View style={styles.loader}>
              <Loader />
            </View>
          ) : (
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
          )}
          <View style={styles.btnView}>
            <Button
              title="Make a one-time contribution"
              style={styles.buttonView}
              onPress={() => navigation.navigate('Home')}
              newButton
            />
            <Button
              title="Setup Recurring contributions"
              style={styles.buttonView}
              onPress={() => navigation.navigate('Home')}
              backgroundColor={Color.greenFour}
              newButton
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    homeData: state.homeReducer.homeData,
    homeDataError: state.homeReducer.homeDataError,
  };
};

export default connect(mapStateToProps)(ContributionsScreen);
