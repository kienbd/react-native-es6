import { Font } from 'expo'
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import LoadingScreen from '../screens/LoadingScreen'
import store from '../store'


import Routes from './routes'

export default class Bootstrap extends Component {
  constructor() {
    super()
    this.state = {
      isReady: false
    }
  }
  componentWillMount() {
    this.loadFonts()
  }
  async loadFonts() {
    const fonts = {
      /* Fonts here */
    }
    await Font.loadAsync(fonts)
    this.setState({ isReady: true })
  }
  render() {
    if (!this.state.isReady) {
      return <LoadingScreen />
    }
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}


