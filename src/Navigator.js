import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import TopNavigation from './components/TopNavigation';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ListDBScreen from './screens/ListDBScreen';

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    DBs: ListDBScreen,
    About: AboutScreen
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            title: ' Datos Abiertos  🇲🇽',
            headerStyle: {
                backgroundColor: '#a3a375',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: (<TopNavigation navigation={navigation} />)                        
        }
    },
    initialRouteName: 'Home'
})

export default createAppContainer(
    createSwitchNavigator({
        App: AppNavigator
    }, {
        initialRouteName: "App"
    })
)