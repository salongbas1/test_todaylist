import React, {useState} from 'react'
import { StyleSheet,Modal,Button, Text, View, FlatList, TouchableOpacity } from 'react-native'
import {globalStyles} from '../styles/global'
import Icon from 'react-native-vector-icons/FontAwesome';

function home ({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        {Event: 'Event A',time: '13.00-13.30', detail: 'LLLLL', key: 1}
    ])

    return (
        <View style= {globalStyles.container}>

            <Modal visible={modalOpen} >
                <View style={StyleSheet.modalContent}>
                    <Icon 
                        name="close" 
                        size={24} 
                        style={globalStyles.modalToggle}
                        onPress={() => setModalOpen(false)}
                    />
                    <Text>dddd</Text>
                </View>
            </Modal>

            <Icon 
                name="plus" 
                size={20} 
                style={globalStyles.modalToggle}
                onPress={() => setModalOpen()}
                 />

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



