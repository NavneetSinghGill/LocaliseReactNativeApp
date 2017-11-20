/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>

        <WordButton
          title='Welcome'
          onPressProp={()=>Alert.alert('You tapped the button!////')}
        />
        <WordButton
          title='Blow'
          onPressProp={()=>Alert.alert('You tapped the button!')}
        />
        <WordButton
          title='Create'
          onPressProp={()=>Alert.alert('You tapped the button!////')}
        />
        <WordButton
          title='Food'
          onPressProp={()=>Alert.alert('You tapped the button!')}
        />

      </View>
    );
  }
}

class WordButton extends Component {
  render() {
    return (
      <Button
        onPress={this.props.onPressProp}
        title={this.props.title}
        color="#841584"
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
