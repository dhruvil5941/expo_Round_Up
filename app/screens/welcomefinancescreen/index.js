import React, {Component} from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Button from '../../components/button';
import {Color, Images} from '../../theme';

class WelcomeFinanceScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainView}>
        <StatusBar
          animated={true}
          backgroundColor={Color.white}
          translucent={true}
          barStyle="dark-content"
          hidden={false}
        />
        <ScrollView>
          <Text style={styles.mainHeadingText}>Welcome to RoundUp!</Text>
          <View style={styles.descView}>
            <Text style={[styles.descText, {marginBottom: '5%'}]}>
              We're so excited to start your investment journey through your
              everyday digital transactions.
            </Text>
            <Text style={styles.descText}>
              RoundUp allows you to round up your transactions to the nearest
              dollar, 3rd dollar or 5th dollar, and that rounded up amount is
              automatically channeled monthly into an investment portfolio
              recommended for you.
            </Text>
          </View>
          <View style={styles.imgView}>
            <Image
              source={Images.welcomeFinanceImage}
              resizemode={'contain'}
              style={styles.imageStyle}
            />
          </View>
        </ScrollView>
        <View style={styles.bottomView}>
          <View style={styles.bottomTray} />
          <Button
            title="Next"
            style={styles.bottomTrayBtn}
            onPress={() => navigation.navigate('OnboardingScreenTwo')}
            newButton
          />
        </View>
      </View>
    );
  }
}

export default WelcomeFinanceScreen;
