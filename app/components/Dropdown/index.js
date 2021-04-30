import React from 'react';
import RNPickerSelect from "react-native-picker-select";

const DropDown = ({placeholder, items, onValueChange, value, style, Icon, textInputProps, useNativeAndroidPickerStyle}) => {
    return (
        <RNPickerSelect
            placeholder={placeholder}
            items={items}
            onValueChange={onValueChange}
            style={style}
            value={value}
            useNativeAndroidPickerStyle={useNativeAndroidPickerStyle}
            textInputProps={textInputProps}
            Icon={Icon}
        />
    );
};
export default DropDown;
