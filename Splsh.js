import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { getUser } from './reducer';

class Splsh extends Component {

  static navigationOptions = {
    header: null 
  };

  componentDidMount() {
    setTimeout(() => { this.props.navigation.navigate('Home') }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
      <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://images.vexels.com/media/users/3/142912/isolated/preview/4e17695e6ff43707fa6f1078c24d99c8-black-dog-animal-logo-by-vexels.png'}}
        />
        <Text style={styles.topic}>Dogs App</Text>
        <Text>Find Your Dog Breeds</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19B5FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topic: {
    fontSize: 40,
    color: '#fff'
  }
});

export default Splsh;