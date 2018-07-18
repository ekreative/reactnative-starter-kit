import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

export default class ScreenC extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          It is Component C
        </Text>
        <Text style={styles.title}>
          Value: {this.props.value}
        </Text>

        {this.props.list.map((item, index) => {
          return <Text key={index}>{item.value}</Text>
        })}
      </View>
    )
  }
}
