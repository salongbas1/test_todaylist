import React from 'react'
import { Button,Text, View } from 'react-native'
import {globalStyles} from '../styles/global'

function reviewDetails ({navigation}) {
  

    return (
        <View style= {globalStyles.container}>
            <Text>{ navigation.getParam('time') }</Text>
            <Text>{ navigation.getParam('detail') }</Text>
            
        </View>
    )
}

export default reviewDetails

