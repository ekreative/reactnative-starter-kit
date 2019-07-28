import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

class MyBackButton extends PureComponent<NavigationInjectedProps> {
  render() {
    const { navigation } = this.props;
    return <Button title="MyBackButton" onPress={() => navigation.goBack()} />;
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);
