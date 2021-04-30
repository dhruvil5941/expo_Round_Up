import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import {Color} from '../../theme';

class Landing extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainView}>
        <StatusBar
          animated={true}
          backgroundColor={Color.themeColor}
          translucent={true}
          barStyle="light-content"
          hidden={false}
        />
        <Text style={styles.mainHeadingText}>RoundUp</Text>
        <Button
          title="LOG IN"
          style={styles.login}
          onPress={() => navigation.navigate('OnboardingScreenOne')}
          solidButton
        />
        <Button
          title="CREATE AN ACCOUNT"
          style={styles.create}
          onPress={() => navigation.navigate('OnboardingScreenOne')}
          outlineButton
        />
      </View>
    );
  }
}

export default Landing;
