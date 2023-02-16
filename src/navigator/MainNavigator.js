import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import routes from '../constrants/routes';
import DetailScreen from '../screens/DetailScreen';
import Detail_card from '../screens/Detail_card';
import HomeScreen from '../screens/HomeScreen';
// import DetailScreen from '../screens/DetailScreen';
// import Detail_card from '../screens/Detail_card';
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignUpScreen';
import DrawerNavi from './DrawerNavigator';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.SIGNIN} component={Login} />
        <Stack.Screen name={routes.SIGNUP} component={Signup} />
        <Stack.Screen name='home' component={DrawerNavi} />
        <Stack.Screen name={routes.DETAIL} component={DetailScreen} />
        <Stack.Screen name='detail_card' component={Detail_card}/>
    </Stack.Navigator>
    )
}
export default MainNavigator;