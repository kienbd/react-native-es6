import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyles}>
        <Text> Loading ... </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
