import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { Text, View } from 'react-native';
import routes from '../constrants/routes';
import Home from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();
const DrawerNavi = () => {
    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name={routes.HOME_TAB} component={Home} />
            <Drawer.Screen name={routes.LOGOUT} component={Login} />
        </Drawer.Navigator>
    )
}
export default DrawerNavi;