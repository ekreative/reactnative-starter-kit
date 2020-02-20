import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from '@react-navigation/compat';

const MyBackButton = (props: { navigation: any }) => {
  const { navigation } = props;
  return <Button title="MyBackButton" onPress={() => navigation.goBack()} />;
};

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);
