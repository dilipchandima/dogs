import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { listBreeds } from './reducer';

class BreedList extends Component {

  static navigationOptions = {
    title: 'Dog Breeds'
  };

  componentDidMount() {
    this.props.listBreeds();
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => this.props.navigation.navigate('Detail', { name: item })}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  render() {
    const { breeds } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={breeds}
        renderItem={this.renderItem}
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  return {
    breeds: state.breeds
  };
};

const mapDispatchToProps = {
  listBreeds
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);