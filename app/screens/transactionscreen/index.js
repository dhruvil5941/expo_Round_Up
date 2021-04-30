import React, {Component} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles, {pickerSelectStyles} from './styles';
import {Color} from '../../theme';
import {connect} from 'react-redux';
import {transactionDataRequest} from '../../redux/transactions/actions';
import Stocks from '../../components/stocklistprice';
import Loader from '../../components/loader';
import SwitchView from '../../components/switch';
import DropDown from "../../components/Dropdown";

class TransactionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      isClicked: '1st',
      transactionData: [],
      selectedDollar: [],
      cardValue: 'For card ending with 4328 ',
      roundAllSelect: false,
    };
  }

  handleClicked = value => {
    if (value === '3d') {
      this.setState({transactionData: []});
    }
    this.setState({isClicked: value});
  };

  componentDidMount() {
    this.props.transactionDataRequest();
    var num = 5.2;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.transactionData !== nextProps.transactionDetails) {
      this.getNearestDollar(this.props.transactionDetails);
    }
    return true;
  }

  selectDollar = item => {
    this.setState({selectedDollar: [...this.state.selectedDollar, item]});
  };
  unSelectDollar = item => {
    const data = this.state.selectedDollar.filter(
      selected => selected.name !== item.name,
    );
    this.setState({selectedDollar: data});
  };
  getNearestDollar = transactionData => {
    const data = transactionData.map(
      (item, index) =>
        (transactionData[index].round =
          Math.round((Math.ceil(item.amount) - item.amount) * 100) / 100),
    );
    this.setState({transactionData: transactionData});
  };
  getNearest3rdDollar = transactionData => {
    const data = transactionData.map(
      (item, index) =>
        (transactionData[index].round =
          Math.round((Math.ceil(item.amount / 3.0) * 3 - item.amount) * 100) /
          100),
    );
    this.setState({transactionData: transactionData});
  };
  getNearest5thDollar = transactionData => {
    const data = transactionData.map(
      (item, index) =>
        (transactionData[index].round =
          Math.round((Math.ceil(item.amount / 5.0) * 5 - item.amount) * 100) /
          100),
    );
    this.setState({transactionData: transactionData});
  };
  getAllSelected = () => {
    this.setState({selectedDollar: this.state.transactionData});
  };
  getAllUnSelected = () => {
    this.setState({selectedDollar: []});
  };
  toggleSwitch = () => {
    if (this.state.isEnabled === false) {
      this.getAllSelected();
    }
    if (this.state.isEnabled === true) {
      this.getAllUnSelected();
    }
    this.setState({isEnabled: !this.state.isEnabled});
  };

  render() {
    const {
      transactionData,
      selectedDollar,
      roundAllSelect,
      isEnabled,
      isClicked,
      cardValue,
    } = this.state;
    const {transactionDetails} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.roundUpOpstion}>Round Up Options</Text>
          <View style={styles.enableView}>
            <Text style={styles.enableText}>Enable Automatic Round Ups</Text>
            <View>
              <SwitchView
                value={isEnabled}
                onValueChange={val => this.toggleSwitch()}
                barHeight={25}
                circleBorderWidth={0}
                backgroundActive={Color.blue}
                backgroundInactive={Color.inactiveColor}
                circleActiveColor={Color.white}
                circleInActiveColor={Color.white}
                changeValueImmediately={true}
                renderActiveText={false}
                renderInActiveText={false}
                circleSize={20}
                switchWidthMultiplier={2.3}
              />
            </View>
          </View>
          <View style={styles.nearestView}>
            <TouchableOpacity
              style={[
                styles.nearestPropOne,
                {
                  backgroundColor:
                    isClicked === '1st'
                      ? Color.lightGreen
                      : Color.secondaryColor,
                },
              ]}
              onPress={() => {
                this.handleClicked('1st');
                this.getNearestDollar(transactionDetails);
              }}>
              <Text
                style={[
                  styles.nearestText,
                  {
                    color: isClicked === '1st' ? Color.white : Color.black,
                  },
                ]}>
                Nearest Dollar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.nearestPropOne,
                {
                  backgroundColor:
                    isClicked === '3rd'
                      ? Color.lightGreen
                      : Color.secondaryColor,
                },
              ]}
              onPress={() => {
                this.handleClicked('3rd');
                this.getNearest3rdDollar(transactionDetails);
              }}>
              <Text
                style={[
                  styles.nearestText,
                  {
                    color: isClicked === '3rd' ? Color.white : Color.black,
                  },
                ]}>
                Nearest 3rd Dollar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.nearestPropOne,
                {
                  backgroundColor:
                    isClicked === '5th'
                      ? Color.lightGreen
                      : Color.secondaryColor,
                },
              ]}
              onPress={() => {
                this.handleClicked('5th');
                this.getNearest5thDollar(transactionDetails);
              }}>
              <Text
                style={[
                  styles.nearestText,
                  {
                    color: isClicked === '5th' ? Color.white : Color.black,
                  },
                ]}>
                Nearest 5th Dollar
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.transactionView}>
            <Text style={styles.roundUpText}>Recent Transactions</Text>
            {!roundAllSelect ? (
              <TouchableOpacity
                style={styles.roundAllDisable}
                onPress={() => {
                  isEnabled === false &&
                    (this.getAllSelected(),
                    this.setState({roundAllSelect: true}));
                }}>
                <Text style={styles.monthTextDisable}>Round Up all</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.roundAllActive}
                onPress={() => {
                  isEnabled === false &&
                    (this.getAllUnSelected(),
                    this.setState({roundAllSelect: false}));
                }}>
                <Text style={styles.monthTextActive}>Round Up all</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.monthView}>
            <DropDown
              onValueChange={value => this.setState({cardValue: value})}
              selectedValue={cardValue}
              value={cardValue}
              useNativeAndroidPickerStyle={false}
              items={[
                {
                  label: 'For card ending with 4328 ',
                  value: 'For card ending with 4328 ',
                },
                {
                  label: 'For card ending with 4390 ',
                  value: 'For card ending with 4390 ',
                },
                {
                  label: 'For card ending with 4217 ',
                  value: 'For card ending with 4217 ',
                },
              ]}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 15,
                  right: 5,
                },
              }}
              Icon={() => {
                return <View style={styles.picker} />;
              }}
            />
          </View>
          {transactionDetails.length > 0 ? (
            <View style={styles.listView}>
              <FlatList
                data={transactionDetails}
                renderItem={({item}) => (
                  <View style={styles.listDataView} key={item.index}>
                    <Stocks
                      name={item.name}
                      percentage={item.amount}
                      nameStyle={styles.stockName}
                      percentageStyle={styles.listAmount}
                    />
                    {item.round === 0 ? (
                      <Text style={styles.amountView}>-</Text>
                    ) : (
                      <>
                        {selectedDollar.length > 0 &&
                        selectedDollar.filter(item1 => item1.name === item.name)
                          .length > 0 ? (
                          <TouchableOpacity
                            style={styles.amountRound}
                            onPress={() => {
                              isEnabled === false && this.unSelectDollar(item);
                              this.setState({roundAllSelect: false});
                            }}>
                            <Text style={styles.roundText}>
                              ^ ${item.round.toFixed(2)}
                            </Text>
                          </TouchableOpacity>
                        ) : (
                          <>
                            {item.round && (
                              <TouchableOpacity
                                style={styles.selectDollar}
                                onPress={() => this.selectDollar(item)}>
                                <Text style={styles.selectDollarText}>
                                  +${item.round.toFixed(2)}
                                </Text>
                              </TouchableOpacity>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </View>
                )}
                keyExtractor={item => item.index}
              />
            </View>
          ) : (
            <View style={styles.loader}>
              <Loader />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactionDetails: state.transactionReducer.transactionData,
    transactionDataError: state.transactionReducer.transactionDataError,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    transactionDataRequest: () => dispatch(transactionDataRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);
