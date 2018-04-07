import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { listBreeds } from './reducer';
import { setSearchText } from './reducer';
import { searchBreeds } from './reducer';

class BreedList extends Component {

  static navigationOptions = {
    title: 'Dog Breeds'
  };

  changeTextHandler = text => {
    this.props.setSearchText(text);
  };

  searchBreeds = () => {
    const { breeds, searchText, breedsSearched } = this.props;
    console.log(searchText);

    if (searchText == "") {
      this.props.searchBreeds(breeds);
    }

    searchBreedArray = breeds.filter((item) => {
      if (item.includes(searchText))
        return item;
    })
    this.props.searchBreeds(searchBreedArray);

  }

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
    const { breeds, searchText, breedsSearched } = this.props;
    return (
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.searchBreeds}
          placeholder="Search Breeds"
          returnKeyType="done"
          returnKeyLabel="done"
        />
        <FlatList
          styles={styles.container}
          data={breedsSearched}
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textInput: {
    padding: 20,
    borderColor: "gray",
    width: "100%"
  }
});

const mapStateToProps = state => {
  return {
    breeds: state.breeds,
    searchText: state.searchText,
    breedsSearched: state.breedsSearched
  };
};

const mapDispatchToProps = {
  listBreeds,
  setSearchText,
  searchBreeds
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);