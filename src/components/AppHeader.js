import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

type Props = {};
export default class AppHeader extends Component {
  render() {
    const { headerBody } = this.props

    return (
      <Container>
        <Header>
          <Body>
            <Title>{headerBody}</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}