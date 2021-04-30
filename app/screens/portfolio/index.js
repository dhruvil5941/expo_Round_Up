import React, {Component} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import styles, {indicatorStyles} from './styles';
import Button from '../../components/button';
import {connect} from 'react-redux';
import {portfolioRequest} from '../../redux/portfolio/actions';
// import PieChart from '../../components/piechart';
import Stocks from '../../components/stocklistprice';
import Loader from '../../components/loader';

class Conservative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
    };
  }

  componentDidMount() {
    this.props.portfolioRequest();
  }

  render() {
    const {portfolioList, navigation} = this.props;
    const {data} = portfolioList;
    const {currentPosition} = this.state;
    const count = data && data.length;
    if (!data) {
      return (
        <View style={styles.loader}>
          <Loader />
        </View>
      );
    } else {
      return (
        <View style={styles.mainView}>
          <View style={styles.swiperView}>
            <ScrollView>
              <Swiper
                style={styles.swiper}
                loop={false}
                index={currentPosition}
                autoplay={false}
                showsPagination={false}
                onIndexChanged={page => {
                  this.setState({currentPosition: page});
                }}>
                {data &&
                  data.map(item => (
                    <View key={item.index}>
                      {item.isOtherPortfolio === true ? (
                        <Text style={styles.titleText}>
                          Portfolio Recommended
                        </Text>
                      ) : (
                        <Text style={styles.titleText}>Portfolio</Text>
                      )}

                      {/*<View style={styles.pieView}>*/}
                      {/*  <PieChart*/}
                      {/*    radius={50}*/}
                      {/*    sections={item.chartData}*/}
                      {/*    dividerSize={5}*/}
                      {/*    strokeCap={'butt'}*/}
                      {/*  />*/}
                      {/*</View>*/}
                      <View style={styles.riskLabelText}>
                        <Text style={styles.riskText}>Risk Level</Text>
                      </View>
                      <View style={styles.stepperView} key={currentPosition}>
                        <StepIndicator
                          stepCount={count}
                          customStyles={indicatorStyles}
                          currentPosition={currentPosition}
                        />
                      </View>
                      <View style={styles.portfolioText}>
                        <Text style={styles.middleText}>
                          {item.portfolioName}
                        </Text>
                      </View>
                      <View style={styles.portfolioTypes}>
                        <FlatList
                          data={
                            portfolioList.data[currentPosition].portfolioType
                          }
                          renderItem={({item}) => (
                            <View
                              style={styles.portfolioTypesList}
                              key={item.index}>
                              <Stocks
                                name={item.name}
                                percentage={item.percentage}
                                nameStyle={styles.listName}
                                percentageStyle={styles.percentageText}
                              />
                            </View>
                          )}
                          keyExtractor={item => item.index}
                        />
                      </View>
                      {item.isOtherPortfolio === true ? (
                        <View style={styles.portfolioTextStyle}>
                          <Button
                            title="Choose recommended portfolio"
                            style={styles.buttonView}
                            onPress={() => navigation.navigate('Home')}
                            newButton
                          />
                          <Button
                            title="Choose another portfolio"
                            style={styles.buttonView}
                            onPress={() => navigation.navigate('Home')}
                            newButton
                          />
                        </View>
                      ) : (
                        <View style={styles.buttonStyle}>
                          <TouchableOpacity
                            style={styles.buttonView}
                            onPress={() => navigation.navigate('Home')}>
                            {item.isOtherPortfolio === true ? (
                              <Text style={styles.buttonText}>
                                Choose Recommended portfolio{' '}
                              </Text>
                            ) : (
                              <Text style={styles.buttonText}>
                                Choose portfolio
                              </Text>
                            )}
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  ))}
              </Swiper>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    portfolioList: state.portfolioReducer.portfolioList,
    portfolioError: state.portfolioReducer.portfolioError,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    portfolioRequest: () => dispatch(portfolioRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Conservative);
