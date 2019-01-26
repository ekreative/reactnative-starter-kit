import React, { Component, Fragment } from 'react'
import { Text, View, Button } from 'react-native'

import styles from './styles'

export default class ScreenA extends Component {
  increment = () => this.props.increment()

  decrement = () => this.props.decrement()

  navigateToB = () => this.props.navigation.navigate('ScreenB')

  navigateToC = () => this.props.navigation.navigate('ScreenC')

  render () {
    let { isConnected, value } = this.props

    return (
      <View style={styles.wrapper}>
        {isConnected
          ? <Fragment>
            <Text style={styles.title}>
              It is Screen A
            </Text>
            <Text style={styles.title}>
              Value: {value}
            </Text>
            <Button title='Increment' onPress={this.increment} />
            <Button title='Decrement' onPress={this.decrement} />
            <Button title='Go to Component B' onPress={this.navigateToB} />
            <Button title='Go to Component C' onPress={this.navigateToC} />
          </Fragment>
          : <Text style={styles.title}>
            You are offline.
          </Text>}
      </View>
    )
  }
}
