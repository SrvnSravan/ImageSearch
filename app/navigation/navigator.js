import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import home from '../screens/homeScreen/home';
import Detail from '../screens/detailHome/detail';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name={'iMAGE SearchEngine'} component={home} />
          <Stack.Screen name={'Detail'} component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigator;
