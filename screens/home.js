import React, {useState} from 'react'
import { StyleSheet,Modal,Button, Text, View, FlatList, TouchableOpacity } from 'react-native'
import {globalStyles} from '../styles/global'
import Icon from 'react-native-vector-icons/FontAwesome';
import ReviewForm from './reviewForm'


function home ({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        {Event: 'Event A',time: '13.00-13.30', detail: 'LLLLL', key: 1}
    ])

    const addReview = (review) => {
        review.key = Math.random().toString()
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(false)
    }

    return (
        <View style= {globalStyles.container}>

            <Modal visible={modalOpen} animationType={'slide'}>
                <View style={globalStyles.modalContent}>
                    <Icon 
                        name="close" 
                        size={24} 
                        style={globalStyles.modalToggle}
                        onPress={() => setModalOpen(false)}
                    />
                    <ReviewForm addReview={addReview}/>
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



