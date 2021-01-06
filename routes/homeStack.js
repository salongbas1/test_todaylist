import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Todaylist',
            //headerStyles: { backgroundColor: '#333'}
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Today Detail',
            //headerStyles: { backgroundColor: '#eee'}
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee'}
    }
})

export default createAppContainer(HomeStack)