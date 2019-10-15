import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import HomeListScreen from './screens/HomeListScreen';

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    About: AboutScreen,
    List: HomeListScreen
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            title: 'Datos Abiertos México 🇲🇽',
            headerStyle: {
                backgroundColor: '#48BBEC',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }            
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