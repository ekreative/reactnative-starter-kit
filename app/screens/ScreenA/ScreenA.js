import React, { memo } from 'react'
import { Text, View, Button } from 'react-native'

import styles from './styles'

const ScreenA = memo(({ increment, decrement, navigation, value }) => {
  const navigateToB = () => navigation.navigate('ScreenB')
  const navigateToC = () => navigation.navigate('ScreenC')
  const navigateToHooksScreen = () => navigation.navigate('ScreenWithHooks')

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
                It is Screen A
      </Text>
      <Text style={styles.title}>
                Value: {value}
      </Text>
      <Button title='Increment' onPress={increment} />
      <Button title='Decrement' onPress={decrement} />
      <Button title='Go to Component B' onPress={navigateToB} />
      <Button title='Go to Component C' onPress={navigateToC} />
      <Button title='Go to screen with Hooks examples' onPress={navigateToHooksScreen} />
    </View>
  )
})

export default ScreenA
