import React, {Component} from 'react';
import { Container, View, Button, Text } from 'native-base';
import AppHeader from '../src/components/AppHeader';

type Props = {};
export default class Main extends Component<Props> {
  push = () => {
    const { navigation } = this.props
    navigation.navigate('Push')
  }
  modal = () => {
    const { navigation } = this.props
    navigation.navigate('Modal')
  }
  render() {
    return (
      <Container>
        <AppHeader headerBody={'メイン'}/>
        <View>
          <Button midium iconRight primary onPress={() => alert('hoge')}>
            <Text>FireBaseログイン</Text>
          </Button>
        </View>
        <View>
          <Button midium iconRight primary onPress={this.push}>
            <Text>プッシュ表示</Text>
          </Button>
        </View>
        <View>
          <Button midium iconRight primary onPress={this.modal}>
            <Text>モーダル表示</Text>
          </Button>
        </View>
      </Container>
    );
  }
}