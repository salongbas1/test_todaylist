import React from 'react'
import { StyleSheet,Modal,Button, Text, View, FlatList, TouchableOpacity } from 'react-native'
import {globalStyles} from '../styles/global'
import { Formik } from 'formik'

import { TextInput } from 'react-native-gesture-handler'

function fromedit({addReview}) {

    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ Event: '', time: '', detail: ''}}  
                onSubmit={(values) => {
                    addReview(values)
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder={ navigation.getParam('time') }
                            onChangeText={props.handleChange('time')}
                            value={props.values.time}
                            keyboardType='numeric'
                        >
                        </TextInput>
                        <TextInput
                            style={globalStyles.input}
                            placeholder={ navigation.getParam('detail') }
                            onChangeText={props.handleChange('detail')}
                            value={props.values.detail}
                            
                        >
                        </TextInput>
                        <Button title='submit' color='maroon' onPress={props.handleSubmit}></Button>

                    </View>
                )}
            </Formik>
        </View>
    )

}

export default fromedit