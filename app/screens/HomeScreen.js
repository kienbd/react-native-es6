import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class HomeScreen extends React.Component {
  onModalButtonPressHandler = () => {
    const { navigation } = this.props
    navigation.navigate('Modal', {
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up app/ to start working on your app!</Text>
        <Button onPress={this.onModalButtonPressHandler} title="Show Modal" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
