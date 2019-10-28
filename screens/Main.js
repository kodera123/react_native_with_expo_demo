import React, { Component, Fragment} from 'react';
import { StyleSheet, TextInput } from 'react-native'
import { Container, View, Button, Text } from 'native-base';
import AppHeader from '../src/components/AppHeader';
// import firebase from '../src/components/firebase';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "********************",
  authDomain: "********************",
  databaseURL: "********************",
  projectId: "********************",
  storageBucket: "********************",
  messagingSenderId: "********************",
  appId: "********************",
  measurementId: "********************"
};
firebase.initializeApp(firebaseConfig);

// import {
//   AccessToken,
//   LoginManager
// } from 'react-native-fbsdk';
// import firebase from 'react-native-firebase'

// Calling the following function will open the FB login dialogue:
// export async function facebookLogin() {
//   try {
//     const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

//     if (result.isCancelled) {
//       // handle this however suites the flow of your app
//       throw new Error('User cancelled request');
//     }

//     console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

//     // get the access token
//     const data = await AccessToken.getCurrentAccessToken();

//     if (!data) {
//       // handle this however suites the flow of your app
//       throw new Error('Something went wrong obtaining the users access token');
//     }

//     // create a new firebase credential with the token
//     const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

//     // login with credential
//     const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

//     console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()))
//   } catch (e) {
//     console.error(e);
//   }
// }


type Props = {};
export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: '',
      isUserLogin: false,
    })
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert('パスワードが短いよー 6文字以上にしてくれー')
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
      this.setState({ isUserLogin: true })
    } catch (error) {
      console.log(error.toString());
    }
  }

  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user);
      })
      this.setState({ isUserLogin: true })
    } catch (error) {
      console.log(error.toString());
    }
  }

  async loginWithFacebook() {
    const {
      type,
      token
    } = await Expo.Facebook.logInWithReadPermissionsAsync('2337646569830793', {
      permissions: ['public_profile']
    })

    if (type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error)
      })
    }
  }

  manageUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        alert('ログインしてるよ');
      } else {
        alert('ログインしてないよ！')
      }
    });
  }

  push = () => {
    const { navigation } = this.props
    navigation.navigate('Push')
  }
  modal = () => {
    const { navigation } = this.props
    navigation.navigate('Modal')
  }
  render() {
    const { isUserLogin } = this.state
    return (
      <Fragment>
        <AppHeader headerBody={'メイン'}/>
        <Container style={styles.container}>
          <View style={styles.mainButton}>
            <Button style={{ marginTop: 10 }}
              full
              rounded
              primary
              onPress = {
                () => this.manageUser()
              }
            >
              <Text style={{ color: 'white' }}>ログインの確認</Text>
            </Button>
          </View>
          { !isUserLogin ? (
            <Fragment>
              <View style={styles.mainButton}>
                <TextInput
                  style={{height: 20}}
                  placeholder="アドレスいれてね!"
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                  keyboardType='email-address'
                />
              </View>
              <View style={styles.mainButton}>
                <TextInput
                  style={{height: 20}}
                  placeholder="パスワードいれてね!"
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.mainButton}>
                <Button style={{ marginTop: 10 }}
                  full
                  rounded
                  primary
                  onPress={() => this.signUpUser(this.state.email, this.state.password)}
                >
                  <Text style={{ color: 'white' }}>Sign Up</Text>
                </Button>
              </View>
            </Fragment>
          ) : (
            <View style={styles.mainButton}>
              <Button midium iconRight primary onPress={() => alert('アラート')}>
                <Text>サインアウト</Text>
              </Button>
            </View>
          )}
          <View style={styles.mainButton}>
            <Button style={{ marginTop: 10 }}
              full
              rounded
              primary
              onPress={() => this.loginWithFacebook()}
            >
              <Text style={{ color: 'white' }}>Login with Facebook</Text>
            </Button>
          </View>
          <View style={styles.mainButton}>
            <Button midium iconRight primary onPress={this.push}>
              <Text>押したら何かあるかも...?</Text>
            </Button>
          </View>
          <View style={styles.mainButton}>
            <Button midium iconRight primary onPress={this.modal}>
              <Text>押したら何かあるかも...?</Text>
            </Button>
          </View>
        </Container>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 10
  },
  mainButton: {
    margin: 15,
    textAlign: 'center',
  }
})
