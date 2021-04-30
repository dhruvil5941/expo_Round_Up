import {Dimensions, StyleSheet} from 'react-native';
import {Color} from '../../theme';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Color.white,
    },
    scrollView: {
        marginBottom: '20%',
        flex: 1,
    },
    mainHeadingText: {
        fontWeight: '700',
        fontSize: 18,
        marginTop: '8%',
        textAlign: 'center',
        color: Color.defaultTextColor,
    },
    discView: {
        width: Dimensions.get('window').width / 1.2,
        marginTop: '5%',
        alignSelf: 'center',
    },
    discText: {fontSize: 14, color: Color.sparatorColor, textAlign: 'center'},
    queTitle: {
        fontWeight: '700',
        fontSize: 14,
        marginTop: '6%',
        marginStart: '4%',
        color: Color.defaultTextColor,
    },
    pickerView: {
        width: Dimensions.get('window').width - 35,
        borderRadius: 4,
        alignSelf: 'center',
        marginTop: '3%',
    },
    BtnView: {
        position: 'absolute',
        bottom: '5%',
        alignSelf: 'center',
    },
    BtnText: {
        textAlign: 'center',
        fontWeight: '700',
        color: Color.white,
    },
    questionStyle: {marginTop: '30%'},
    dropdownIconStyle: {
        backgroundColor: 'transparent',
        borderTopWidth: 5,
        borderTopColor: Color.lightGray,
        borderRightWidth: 5,
        borderRightColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftColor: 'transparent',
        width: 0,
        height: 0,
    },
});

export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: Color.lightGray,
        borderRadius: 4,
        color: Color.black,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: Color.lightGray,
        borderRadius: 8,
        color: Color.black,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
