import React, {Component} from 'react';
import { StyleSheet } from 'react-native';

import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import PressButton from '../src/components/PressButton';


type Props = {};
export default class Push extends Component<Props> {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>プッシュ</Title>
          </Body>
          <Right />
        </Header>
        <PressButton style={styles.pressButton} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  pressButton: {
    height: 120,
  },
});
