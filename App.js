import React, { Component, Fragment } from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";

import Main from './screens/Main'
import Push from './screens/Push'
import Modal from './screens/Modal'

import PressButton from './src/components/PressButton';


const MainNavigation = createStackNavigator(
  {
    Main: { screen: Main },
    Push: { screen: Push },
  },
  { initialRouteName: 'Main', mode: 'card', headerMode: 'none' }
)

const NestNavigation = createStackNavigator(
  {
    MainNavigation: { screen: MainNavigation },
    Modal: { screen: Modal },
  },
  { initialRouteName: 'MainNavigation', mode: 'modal', headerMode: 'none' },
)

const AppContainer = createAppContainer(NestNavigation);

type Props = {};
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <AppContainer ref = {nav => {this.navigator = nav;}} />
        <PressButton />
      </Fragment>
    )
  }
}

