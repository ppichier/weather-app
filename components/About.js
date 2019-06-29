import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Linking } from 'react-native'
import style from '../Style'

export default class About extends Component {

    search() {
        console.log(this.props.navigation.navigate('Search'))
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={[style.title, { paddingTop: 20 }]}>A propos de l'application</Text>
                <Text>Cette app a été conçue en React-Native. Elle permet d'obtenir en temps réel la météo dans une ville spécifique</Text>
                <View style={{paddingVertical: 20}}>
                    <Button
                    color={style.color[0]} onPress={() => this.search()} title="Rechercher" />
                </View>
                <TouchableOpacity onPress={() => Linking.openURL('http://www.linkedin.com/in/pierantonio-pichierri')}>
                    <Text style={{ color: 'blue' }}>
                        Pier'Antonio Pichierri
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
