import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from '../welcomefinancescreen/styles';

import Button from '../../components/button';
import {Images} from '../../theme';

class WelcomeQuestionScreen extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView>
          <Text style={styles.mainHeadingText}>Welcome to RoundUp!</Text>
          <View style={styles.descView}>
            <Text style={styles.descText}>
              Through 5 questions, we will understand your investment goals and
              risk preferences better, and this allows us to recommend the best
              portfolio to suit your needs
            </Text>
          </View>
          <View style={styles.newimgView}>
            <Image
              source={Images.welcomeQuestionImage}
              resizemode={'contain'}
              style={styles.imageStyle}
            />
          </View>
        </ScrollView>
        <View style={styles.bottomView}>
          <View style={styles.bottomTray} />
          <View>
            <Button
              title="Next"
              style={styles.bottomTrayBtn}
              onPress={() =>
                this.props.navigation.navigate('Userfinancesquestion')
              }
              newButton
            />
          </View>
        </View>
      </View>
    );
  }
}

export default WelcomeQuestionScreen;
