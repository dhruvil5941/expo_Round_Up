import React from 'react';
import {Switch} from 'react-native-switch';

const SwitchView = ({
  value,
  onValueChange,
  barHeight,
  circleBorderWidth,
  backgroundActive,
  backgroundInactive,
  circleActiveColor,
  circleInActiveColor,
  changeValueImmediately,
  renderActiveText,
  renderInActiveText,
  circleSize,
  switchWidthMultiplier,
}) => {
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      barHeight={barHeight}
      circleBorderWidth={circleBorderWidth}
      backgroundActive={backgroundActive}
      backgroundInactive={backgroundInactive}
      circleActiveColor={circleActiveColor}
      circleInActiveColor={circleInActiveColor}
      changeValueImmediately={changeValueImmediately}
      renderActiveText={renderActiveText}
      renderInActiveText={renderInActiveText}
      circleSize={circleSize}
      switchWidthMultiplier={switchWidthMultiplier}
    />
  );
};
export default SwitchView;
