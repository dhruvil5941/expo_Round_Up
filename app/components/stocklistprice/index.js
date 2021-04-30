import React from 'react';
import {Text} from 'react-native';

const Stocks = ({nameStyle, percentageStyle, name, percentage}) => {
  return (
    <>
      <Text style={nameStyle}>{name}</Text>
      <Text style={percentageStyle}>{percentage}</Text>
    </>
  );
};
export default Stocks;
