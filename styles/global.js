import { StyleSheet} from 'react-native'


export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:50
    },
    titleText: {
        fontSize:20,
        color:'#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    },
    modalContent: {
        flex: 1
    }
})

