import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class PressButton extends Component {
  state = {
    texts: ['Hello World!!!'],
    pushCount: 0,
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.texts.map((t, i) => (
          <Text key={`${t}-${i}`}>{t.repeat(i)}</Text>
        ))}
        <Button
          onPress={() => {
            this.setState({ texts: [...this.state.texts, 'オラ'] })
          }}
          title="押して..."
        />
      </View>
    );
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
