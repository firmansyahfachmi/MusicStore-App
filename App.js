
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import {Provider} from 'react-redux'
import store from './src/Publics/Redux/store'

import {Icon, Root} from 'native-base'

import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'


import Home from './src/screen/Home'
import Item from './src/screen/item'
import Detail from './src/screen/Detail'
import Profile from './src/screen/Profile'
import Daftar from './src/screen/Daftar'
import Wishlist from './src/screen/Wishlist'
import Keranjang from './src/screen/Keranjang'
import Request from './src/screen/Request'
import History from './src/screen/History'
import Splash from './src/screen/Splash'

const AppStack = createStackNavigator({
    Home:{
      screen : Home,
      navigationOptions : {
        header: null,
        tabBarVisible: true,
      }
    },

    item:{
      screen : Item,
      navigationOptions : {
        header: null
      }
    },

    Detail:{
      screen : Detail,
      navigationOptions : {
        header: null
      }
    },

    Wishlist : {
      screen : Wishlist,
      navigationOptions : {
        headerTitle: <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Wishlist</Text>,
      }
    },

    Keranjang : {
      screen : Keranjang,
      navigationOptions : {
        headerTitle: <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Keranjang</Text>,
      }
    },
    History: {
      screen : History,
      navigationOptions : {
        headerTitle: <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>History Transaksi</Text>,
      }
    },
    Profile: {
      screen : Profile,
      navigationOptions : {
        headerTitle: <Text style={{color:'white', fontSize:20, fontWeight:'bold',marginLeft:20}}>Akun Saya</Text>,
        headerLeft: null
      }
    },
  },{
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#F5D372',
      },
    },
    navigationOptions: ({navigation}) => {
      let tabBarVisible;
      if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
          if (route.routeName === route.routeName) {
            tabBarVisible = false;
          } else {
            tabBarVisible = true;
          }
        });
      }
      return {
        tabBarVisible
      };
  }
}
)


const AuthStack = createStackNavigator({
  
  Profile: {
    screen : Profile,
    navigationOptions : {
      header: null
    }
  },
  Daftar: {
    screen : Daftar,
    navigationOptions : {
      headerTitle: <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Daftar</Text>,
    }
  },
},{
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#F5D372',
    }
  }
})


const TabNavigator = createBottomTabNavigator({
  HomeTab : {
    screen: AppStack,
    navigationOptions : {
      
      tabBarIcon : ({tintColor}) => (
          <Icon type="AntDesign" name="home" style={{fontSize:22,color:`${tintColor}`}}/>
      ),title: 'Home'
    }
  },
  RequestTab : {
    screen: Request,
    navigationOptions : {
      
      tabBarIcon : ({tintColor}) => (
          <Icon type="AntDesign" name="mail" style={{fontSize:22,color:`${tintColor}`}}/>
      ),title: 'Request'
    }
  },
  ProfileTab : {
    screen: AuthStack,
    navigationOptions : {
      tabBarIcon : ({tintColor}) => (
          <Icon type="AntDesign" name="user" style={{fontSize:22,color:`${tintColor}`}}/>
      ),title: 'Akun',
      
    }
  }
},{
  tabBarOptions : {
    showIcon: true,
    activeTintColor: '#fabc0c',
    inactiveTintColor: 'grey',
    showLabel: true,
    style : {
      height: 50,
      paddingVertical: 3,
      borderTopWidth: 0,
      elevation: 20
    }
    
  }
})

const AppNavigator = createSwitchNavigator({
  Splash: Splash,
  Tab: TabNavigator,
  
  
},{
  initialRouteName: 'Splash'
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Root>
        <AppContainer/>
        </Root>
      </Provider>
    )
  }
}

