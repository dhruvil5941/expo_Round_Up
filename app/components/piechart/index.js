import React from 'react';
import Pie from 'react-native-pie';

const PieChart = ({radius, sections, dividerSize, strokeCap}) => {
  return (
    <Pie
      radius={radius}
      sections={sections}
      dividerSize={dividerSize}
      strokeCap={strokeCap}
    />
  );
};
export default PieChart;
