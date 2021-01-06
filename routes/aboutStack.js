import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import About from '../screens/about'


const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'Todaylist',
            //headerStyles: { backgroundColor: '#333'}
        }
    },

}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee'}
    }
})

export default createAppContainer(AboutStack)