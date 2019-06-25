import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import style from '../Style'

export default class About extends Component {

    search () {
        console.log(this.props.navigation.navigate('Search'))
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>A propos de l'application</Text>
                <Text>Cette app a été conçue en React-Native. Elle permet d'obtenir en temps réel la météo dans une ville spécifique</Text>
                <Button color={style.color} onPress={ () => this.search()} title="Rechercher"/>
            </View>
        )
    }
}
