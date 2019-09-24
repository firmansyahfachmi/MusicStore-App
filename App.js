
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Provider} from 'react-redux'
import store from './src/Publics/Redux/store'

import {Icon} from 'native-base'

import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

// import Icon from 'react-native-vector-icons/Entypo';

import Home from './src/screen/Home'
import Item from './src/screen/item'
import Detail from './src/screen/Detail'
import Profile from './src/screen/Profile'
import Login from './src/screen/Login'
import Daftar from './src/screen/Daftar'
import Wishlist from './src/screen/Wishlist'
import Keranjang from './src/screen/Keranjang'

const AppStack = createStackNavigator({
    Home:{
      screen : Home
    },
    item:{
      screen : Item
    },
    Detail:{
      screen : Detail
    },
    Profile:{
      screen : Profile
    },
    Login : {
      screen : Login
    },
    Daftar : {
      screen : Daftar
    },
    Wishlist : {
      screen : Wishlist
    },
    Keranjang : {
      screen : Keranjang
    }
  },{
    headerMode: 'none'
  }
)


const TabNavigator = createBottomTabNavigator({
  Home : {
    screen: AppStack,
    navigationOptions : {
      tabBarIcon : ({tintColor}) => (
          <Icon type="AntDesign" name="home" style={{fonstSize:18,color:`${tintColor}`}}/>
      ),title: 'Home'
    }
  },
  Request : {
    screen: AppStack,
    navigationOptions : {
      tabBarIcon : ({tintColor}) => (
          <Icon type="AntDesign" name="mail" style={{fonstSize:18,color:`${tintColor}`}}/>
      ),title: 'Request'
    }
  },
  Profile : {
    screen: Profile,
    navigationOptions : {
      tabBarIcon : ({tintColor}) => (
          <Icon type="AntDesign" name="user" style={{fonstSize:18,color:`${tintColor}`}}/>
      ),title: 'Profile'
    }
  }
},{
  tabBarOptions : {
    showIcon: true,
    activeTintColor: '#fabc0c',
    inactiveTintColor: 'grey',
    showLabel: true
    
  }
})

const AppNavigator = createSwitchNavigator({
  Tab: TabNavigator,
  // App: AppStack,
  
},{
  initialRouteName: 'Tab'
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}

