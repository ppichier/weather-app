import React, { Component } from 'react'
import style from '../Style'
import { TextInput, Image, Button, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import List from './List'

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            city: 'Montpellier'
        }
    }

    setCity(city) {
        this.setState({ city })
    }

    submit() {
        this.props.navigation.navigate('Result', { city: this.state.city })
    }

    static navigationOptions = {
        title: 'Rechercher une ville',
        height: 1,
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput
                    style={style.input}
                    onChangeText={(text) => this.setCity(text)}
                    onSubmitEditing={ () => this.submit()}
                    value={this.state.city}
                />
                <Button color={style.color[0]} onPress={() => this.submit()} title="Rechercher une ville" />
            </View>
        )
    }
}


export default createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            headerStyle: style.header,
            headerTitleStyle: style.headerTitle
        }
    },
    Result: {
        screen: List,
        navigationOptions: {
            headerStyle: style.header,
            headerTitleStyle: style.headerTitle
        }
    }
});