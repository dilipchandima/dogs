import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';
import BreedList from './BreedList';
import Splsh from './Splsh';

import { StackNavigator } from 'react-navigation';
import BreedDetails from './BreedDetails';

const Stack = StackNavigator({
  Splsh: {
    screen: Splsh
  },
  Home: {
    screen: BreedList
  },
  Detail: {
    screen: BreedDetails
  }
});

/**
 * Base URL definitions
 */
const client = axios.create({
  baseURL: 'https://dog.ceo/api',
  responseType: 'json'
});

/**
 * Create the Store
 */
const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
