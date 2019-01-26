import React from 'react'
import { Button } from 'react-native'
import { withNavigation } from 'react-navigation'

const MyBackButton = React.memo(({ navigation }) => {
  return <Button title='MyBackButton' onPress={() => { navigation.goBack() }} />
})

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton)
