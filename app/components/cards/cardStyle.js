import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#fff',
    width: wp(90),
    alignSelf: 'center',
    borderRadius: 25,
    height: hp(30),
    borderWidth: 1,
    borderColor: '#C4C4C4',
    marginVertical: 10,
  },
  cardImageStyle: {
    width: wp(90),
    height: hp(25),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: 'center',
  },
  titleStyle: {
    fontWeight: '300',
    fontSize: wp(5),
    color: 'black',
    textAlign: 'center',
    lineHeight: hp(4),
    marginLeft: 5,
  },
});

export default styles;
