import React from 'react'
import { Text, ActivityIndicator, ListView, Image } from 'react-native'
import style from '../Style'
import axios from 'axios'
import WeatherRow from './weather/Row'

const API_KEY = '3cd8538b1e8c92db2d895805865728db'


export default class List extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: `Météo / ${navigation.state.params.city}`,
        }
    }

    constructor(props) {
        super(props)
        console.log('state', this.props.navigation.state)
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }
        setTimeout(() => {
            this.fetchWeather()
        }, 1000)
    }

    fetchWeather() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&APPID=${API_KEY}`)
            .then((response) => {
                // console.log(response.data)
                this.setState({ report: response.data })
            })
    }

    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator color={style.color} size="large" />
            )
        } else {
            const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
            return (
                <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list)}
                    renderRow={(row, j, k) => <WeatherRow day={row} index={parseInt(k, 10)} />}
                />
            )
        }

    }
}