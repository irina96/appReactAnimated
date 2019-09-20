  
import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

const {width, height} = Dimensions.get('window')

export default class Header extends Component {
    render(){
        return (
            <View style={styles.containerNavbar}>
                <TouchableWithoutFeedback onPress={this.props.showMenu}>
                <Icon name="bars" size={25} color="#fff" />
                </TouchableWithoutFeedback>
                <Text style={styles.navbarTitle}>Hola</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerNavbar: {
        backgroundColor: 'black',
        flexDirection: 'row',
        marginBottom: 10,
        height: height/8,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingTop: 30,
        width: width
    },
    navbarTitle: {
        fontSize: 20,
        color: '#fff'
        
    }
})