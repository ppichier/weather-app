import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import About from './components/About'
import Search from './components/Search';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

const Tabs = createMaterialTopTabNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image source={require('./components/icons/home.png')} style={{ width: 30, height: 30 }} />
      }
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image source={require('./components/icons/user.png')} style={{ width: 30, height: 30 }} />
      }
    }
  }

}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      pressColor: '#e5ffff',
      indicatorStyle: {
        height: 3,
        backgroundColor: '#FFaaaa'
      },
      style: {
        backgroundColor: '#64ffda',
        borderTopWidth: 1,
        borderTopColor: '#14cba8',
      }
    }
  })

const TabsNavigator = createAppContainer(Tabs);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabsNavigator />
      </View>
    );
  }
}


/* const styles = StyleSheet.create({
  view: {

  },
}); */
