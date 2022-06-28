import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardImageStyle: {
    width: wp(100),
    height: hp(70),
  },
  titleStyle: {
    fontWeight: '300',
    fontSize: hp(3),
    color: 'black',
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 10,
  },
  lowerViewStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff',
    bottom: 20,
  },
});

export default styles;
