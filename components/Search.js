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
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')} style={{ width: 30, height: 30 }} />
        }
    }


    render() {
        return (
            <View style={style.container}>
                <TextInput
                    style={style.input}
                    onChangeText={(text) => this.setCity(text)}
                    value={this.state.city}
                />
                <Button color={style.color} onPress={() => this.submit()} title="Rechercher une ville" />
            </View>
        )
    }
}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}

export default createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions
    },
    Result: {
        screen: List,
        navigationOptions
    }
});