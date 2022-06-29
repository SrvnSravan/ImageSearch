import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../components/colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  cardImageStyle: {
    width: wp(100),
    height: hp(70),
  },
  titleStyle: {
    fontWeight: '300',
    fontSize: hp(3),
    color: Colors.BLACK,
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 10,
  },
  lowerViewStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.WHITE,
    bottom: 20,
  },
});

export default styles;
