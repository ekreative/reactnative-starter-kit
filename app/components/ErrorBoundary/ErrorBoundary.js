import { View, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import styles from './styles'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null,
      showDetails: false
    }
    this.toggleDetails = this.toggleDetails.bind(this)
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  toggleDetails () {
    this.setState(state => {
      return {
        showDetails: !state.showDetails
      }
    })
  }

  render () {
    if (this.state.errorInfo) {
      return <View style={styles.wrapper}>
        <Text>Something went wrong, please restart your application.</Text>
        <TouchableOpacity
          onPress={this.toggleDetails}>
          <Text>Show details</Text>
        </TouchableOpacity>
        {this.state.showDetails && <View>
          <Text>{this.state.error && this.state.error.toString()}</Text>
          <Text>{this.state.errorInfo && this.state.errorInfo.componentStack}</Text>
        </View>}
      </View>
    }
    return this.props.children
  }
}
export default ErrorBoundary
