import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Color} from '../../theme';

const Loader = () => {
  return <ActivityIndicator size="large" color={Color.themeColor} />;
};
export default Loader;
