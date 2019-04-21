import React, { memo } from 'react'
import { Text, View, Button } from 'react-native'

import styles from './styles'
import MyBackButton from '../../components/MyBackButton'

const ScreenB = memo(({ increment, decrement, value }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
                It is Component B
      </Text>
      <Text style={styles.title}>
                Value: {value}
      </Text>

      <Button title='Increment' onPress={increment} />
      <Button title='Decrement' onPress={decrement} />
      <MyBackButton />
    </View>
  )
})

export default ScreenB
