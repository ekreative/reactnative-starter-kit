import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import styles from './styles'

export default class ScreenA extends Component {
  constructor (props) {
    super(props)

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.navigateToB = this.navigateToB.bind(this)
    this.navigateToC = this.navigateToC.bind(this)
  }

  increment () {
    this.props.increment()
  }

  decrement () {
    this.props.decrement()
  }

  navigateToB () {
    this.props.navigation.navigate('ScreenB')
  }

  navigateToC () {
    this.props.navigation.navigate('ScreenC')
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          It is Screen A
        </Text>
        <Text style={styles.title}>
          Value: {this.props.value}
        </Text>
        <Button title='Increment' onPress={this.increment} />
        <Button title='Decrement' onPress={this.decrement} />
        <Button title='Go to Component B' onPress={this.navigateToB} />
        <Button title='Go to Component C' onPress={this.navigateToC} />
      </View>
    )
  }
}
