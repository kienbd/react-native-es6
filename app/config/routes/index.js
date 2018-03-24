import React from 'react'
import { StackNavigator } from 'react-navigation'
import Screens from '../../screens'

const MainStack = StackNavigator(
  {
    Home: {
      screen: Screens.HomeScreen
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
)

const RouteStack = StackNavigator(
  {
    MainStack: {
      screen: MainStack
    },
    Modal: {
      screen: Screens.ModalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)


export default RouteStack
