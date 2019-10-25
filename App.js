import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PressButton from './src/PressButton';

export default class App extends Component {
  render() {
    return (
      <PressButton />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
