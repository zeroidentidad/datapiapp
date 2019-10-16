import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import TopNavigation from './components/TopNavigation';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import ListDBScreen from './screens/ListDBScreen';
import PacksScreen from './screens/PacksScreen';
import OrgsScreen from './screens/OrgsScreen';
import ApisScreen from './screens/ApisScreen';

const AppNavigator = createStackNavigator({
    About: AboutScreen,
    Home: HomeScreen,
    DBs: ListDBScreen,
    Packs: PacksScreen,
    Orgs: OrgsScreen,
    Apis: ApisScreen
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