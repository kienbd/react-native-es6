import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'

export default class ModalScreen extends Component {
  onReturnButtonPressHandler = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text> This is the modal </Text>
        <Button onPress={this.onReturnButtonPressHandler} title="Back to Home" />
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
