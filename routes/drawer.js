import { createDrawerNavigator } from 'react-native-drawer'
import { createAppContainer } from 'react-navigation'
import aboutStack from './aboutStack'
import homeStack from './homeStack'

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: homeStack,
    },
    About: {
        screen: aboutStack
    }
})

export default createAppContainer(RootDrawerNavigator)