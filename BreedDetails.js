import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { listSubBreeds } from './reducer';

class BreedDetails extends Component {
  static navigationOptions = {
    title: 'BreedDetails'
  };

  
  renderItem = ({ item }) => (
    <Text style={styles.item}>{item}</Text>
  );
  componentDidMount() {
    const { name } = this.props.navigation.state.params
    this.props.listSubBreeds(name)
  }
  render() {
    const { subBreeds, loadingSubBreeds } = this.props;

    if (loadingSubBreeds) return <Text>Loading...</Text>;

    if(subBreeds.length == 0) return <Text>No Existing Sub Breeds</Text>

    return (
      <View style={styles.container}>
        <Text style={styles.title}>SubBreeds</Text>
        <FlatList
          styles={styles.container}
          data={subBreeds}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#0cc'
  }
});

const mapStateToProps = ({ subBreeds, loadingSubBreeds }) => {
  return {
    subBreeds,
    loadingSubBreeds
  };
};
const mapDispatchToProps = {
  listSubBreeds
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedDetails);