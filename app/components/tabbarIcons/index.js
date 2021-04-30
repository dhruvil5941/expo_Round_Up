import React, {Component} from 'react';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './style';

class TabBarIcons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image
        style={styles.iconStyle}
        source={this.props.icon}
        resizeMode={'contain'}
      />
    );
  }
}

export default TabBarIcons;
