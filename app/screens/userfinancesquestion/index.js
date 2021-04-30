import React, {Component} from 'react';
import {FlatList, ScrollView, StatusBar, Text, View} from 'react-native';
import styles, {pickerSelectStyles} from './styles';
import Button from '../../components/button';
import {Color} from '../../theme';
import {connect} from 'react-redux';
import {questionListRequest} from '../../redux/userfinancesquestion/actions';
import Loader from '../../components/loader';
import DropDown from "../../components/Dropdown";

class UserFinancesQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStatus: '',
      selectedIncome: '',
      dropdownData: '',
    };
  }

  componentDidMount() {
    this.props.questionListRequest();
  }

  render() {
    const {questionList, navigation} = this.props;
    const {QuestionsList} = questionList;
    const placeholder = {
      label: 'Select...',
      value: null,
    };
    return (
      <View style={styles.mainView}>
        <StatusBar
          animated={true}
          backgroundColor={Color.themeColor}
          translucent={true}
          barStyle="light-content"
          hidden={false}
        />
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.mainHeadingText}>Your finances and goals</Text>
            <View style={styles.discView}>
              <Text style={styles.discText}>
                Tell us a little about your current financial situation so we
                can recommend the best investment portfolio for you.
              </Text>
            </View>

            {QuestionsList === undefined ? (
              <View style={styles.questionStyle}>
                <Loader />
              </View>
            ) : (
              <View>
                <FlatList
                  data={QuestionsList}
                  renderItem={({item}) => (
                    <>
                      <Text style={styles.queTitle} key={item.index}>
                        {item.Question}
                      </Text>
                      <View style={styles.pickerView} key={item.index}>
                        <DropDown
                          placeholder={placeholder}
                          items={item.Options.map(option => option)}
                          onValueChange={itemValue =>
                            this.setState({[item.id + '_str']: itemValue})
                          }
                          style={{
                            ...pickerSelectStyles,
                            iconContainer: {
                              top: 20,
                              right: 12,
                            },
                          }}
                          value={this.state[item.id + '_str']}
                          useNativeAndroidPickerStyle={false}
                          textInputProps={{underlineColor: Color.yellow}}
                          Icon={() => {
                            return <View style={styles.dropdownIconStyle} />;
                          }}
                        />
                      </View>
                    </>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
            )}
          </View>
        </ScrollView>
        <Button
          title="Next"
          style={styles.BtnView}
          onPress={() => navigation.navigate('Conservative')}
          newButton
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionList: state.questionListReducer.questionList,
    questionListError: state.questionListReducer.questionListError,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    questionListRequest: () => dispatch(questionListRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserFinancesQuestion);
