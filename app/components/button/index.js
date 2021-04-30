import React from 'react';
import styles from './styles';
import {Text, TouchableOpacity} from 'react-native';
import {Color} from '../../theme';

const Button = ({
  outlineButton,
  solidButton,
  outlineColor,
  backgroundColor,
  title,
  onPress,
  textColor,
  textStyle,
  style,
  newButton,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        style,
        outlineButton && {
          borderWidth: 0.5,
          borderColor: outlineColor ? Color.black : Color.secondaryColor,
          backgroundColor: backgroundColor ? backgroundColor : Color.themeColor,
        },
        solidButton && {
          backgroundColor: backgroundColor ? Color.themeColor : Color.white,
        },
        newButton && {
          backgroundColor: backgroundColor ? backgroundColor : Color.themeColor,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          outlineButton && {color: textColor ? textColor : Color.white},
          solidButton && {color: textColor ? Color.white : Color.black},
          newButton && {color: textColor ? Color.black : Color.white},
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
