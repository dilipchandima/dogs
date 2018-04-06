import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listBleeds } from './reducer';

class BleedList extends Component {

  componentDidMount() {
    this.props.listBleeds();
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  render() {
    const { bleeds } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={bleeds}
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
  console.log(state.bleeds);
  return {
    bleeds: state.bleeds
  };
};

const mapDispatchToProps = {
  listBleeds
};

export default connect(mapStateToProps, mapDispatchToProps)(BleedList);