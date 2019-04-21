/* global __DEV__ */
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
// import firebase from 'react-native-firebase'

import styles from './styles'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null,
      showDetails: false
    }
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    }, () => {
      if (!__DEV__) {
        // firebase.crashlytics().recordError(0, `${this.state.error} ${JSON.stringify(this.state.errorInfo.componentStack)}`)
      }
    }
    )
  }

  toggleDetails = () => {
    this.setState(state => {
      return {
        showDetails: !state.showDetails
      }
    })
  }

  render () {
    if (this.state.errorInfo) {
      let buttonText = this.state.showDetails ? 'Hide details' : 'Show details'

      return <View style={styles.wrapper}>
        <Text style={styles.text}>Something went wrong, please restart your application.</Text>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={this.toggleDetails}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        {this.state.showDetails && <ScrollView style={styles.errorWrapper}>
          <Text style={[styles.text, styles.errorBodyText]}>{this.state.error && this.state.error.toString()}</Text>
          <Text style={[styles.text, styles.errorBodyText]}>{this.state.errorInfo && this.state.errorInfo.componentStack}</Text>
        </ScrollView>}
      </View>
    }
    return this.props.children
  }
}
export default ErrorBoundary
