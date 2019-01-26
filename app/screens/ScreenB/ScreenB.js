import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import styles from './styles'
import MyBackButton from '../../components/MyBackButton'

export default class ScreenB extends Component {
  increment = () => this.props.increment()

  decrement = () => this.props.decrement()

  render () {
    let { value } = this.props

    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          It is Component B
        </Text>
        <Text style={styles.title}>
          Value: {value}
        </Text>

        <Button title='Increment' onPress={this.increment} />
        <Button title='Decrement' onPress={this.decrement} />
        <MyBackButton />
      </View>
    )
  }
}
