import React, {useState} from 'react'
import { Button, Text, View, FlatList, TouchableOpacity } from 'react-native'
import {globalStyles} from '../styles/global'

function home ({ navigation }) {

    const [reviews, setReviews] = useState([
        {Event: 'Event A',time: '13.00-13.30', detail: 'LLLLL', key: 1}
    ])

    return (
        <View style= {globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item )}>
                        <Text style={globalStyles.titleText}>{item.Event}{item.time}</Text>
                    </TouchableOpacity>
            )}>
            </FlatList>
        </View>
    )
}

export default home

