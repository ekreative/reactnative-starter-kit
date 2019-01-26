import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

export default class ScreenC extends PureComponent {
  render () {
    let { value, list } = this.props

    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          It is Component C
        </Text>
        <Text style={styles.title}>
          Value: {value}
        </Text>

        {list.map((item, index) => {
          return <Text key={index}>{item.value}</Text>
        })}
      </View>
    )
  }
}
