import React, {Component} from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

type Props = {};
export default class Modal extends Component<Props> {
  render() {
    return (
      <Container style={{textAlign: 'center',}}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='close' />
            </Button>
          </Left>
          <Body>
            <Title>！？！？！？？！</Title>
          </Body>
          <Right />
        </Header>
        <Image source={require('../assets/SS282.png')} style={{width:300, height:300}} />
      </Container>
    );
  }
}
