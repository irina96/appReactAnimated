import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated,
    Dimensions } from 'react-native';

import Header from './src/components/Header'
import Icon from 'react-native-vector-icons/FontAwesome'

const {width, height} = Dimensions.get('window')

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            animateXY: new Animated.ValueXY({x:60, y:-200}),
            isOpenMenu: false
        }
    }

    showMenu(){
        if(this.state.isOpenMenu){
            this.setState({isOpenMenu: false})
            Animated.parallel([
                Animated.timing(
                    this.state.animateXY, {
                        toValue: {x: 65, y: 0},
                    }
                )
            ]).start()
        }else{
            this.setState({isOpenMenu: true})
            Animated.parallel([
                Animated.timing(
                    this.state.animateXY, {
                        toValue: {x: 65, y: -200}
                    }
                )
            ]).start()
        }
    }

    render(){
        return ( 
        <View style={styles.container}>
        
            <Header showMenu={this.showMenu.bind(this)}/>

            <Animated.View style={
            {
              width: width/2, 
              height: height, 
              backgroundColor: 'black',
              position: 'absolute',
              top: this.state.animateXY.x,
              left: this.state.animateXY.y,}}
              >

            <View style={styles.textWithIcon}>
                    <View style={styles.withIcon}>
                        <Icon 
                            style={styles.iconWithText}
                            name="user"
                            color="white"
                            size={28}
                        />
                        <Text style={styles.text}>User</Text>
                    </View>
            </View>
            <View style={styles.textWithIcon}>
                <View style={styles.withIcon}>
                    <Icon 
                        style={styles.iconWithText}
                        name="home"
                        color="white"
                        size={28}
                    />
                    <Text style={styles.text}>Home</Text>
                </View>
            </View>
            <View style={styles.textWithIcon}>
                <View style={styles.withIcon}>
                    <Icon 
                        style={styles.iconWithText}
                        name="info"
                        color="white"
                        size={28}
                    />
                    <Text style={styles.text}>Information</Text>
                </View>
            </View>   
            </Animated.View>        
        </View>       
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    },

    text: {
        fontSize: 20,
        color: '#fff',   
    },
    /*menu: {
        position: 'absolute',
        width: 170,
        left: 0,
        top: 60,
        height: 100,
        backgroundColor: 'black',
        color: 'white',     
    }*/
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: '#000',
        borderBottomWidth: 3
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20
    },
});



