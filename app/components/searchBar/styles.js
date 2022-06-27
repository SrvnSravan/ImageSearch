import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.8,
    width: wp(90),
    alignSelf: 'center',
    height: hp(5),
    borderRadius: 25,
    marginVertical: hp(2),
    paddingHorizontal: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default styles;
