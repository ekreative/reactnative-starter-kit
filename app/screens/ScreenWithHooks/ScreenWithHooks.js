import React, { memo, useState, useMemo, useEffect } from 'react'
import { View, Text, Button } from 'react-native'

import { fibonacci } from '../../utils'
import styles from './styles'

const ScreenWithHooks = memo(() => {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000)
    return () => clearTimeout(timer)
  })

  const [isGreen, setIsGreen] = useState(true)

  const [num, setNum] = useState(1)
  const fib = useMemo(() => fibonacci(num), [num])

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>It is screen with Hooks examples</Text>
      <Text style={[styles.text, { color: isGreen ? 'limegreen' : 'crimson' }]}>useState example: lorem ipsum</Text>
      <Button title='change color' onPress={() => setIsGreen(!isGreen)} />
      <Text style={styles.text}>useMemo example: Fibonacci of {num} is {fib}</Text>
      <Button title='change fib' onPress={() => setNum(num + 1)} />
      <Text style={styles.text}>useEffect example: {time.toLocaleTimeString()}</Text>
    </View>
  )
})

export default ScreenWithHooks
