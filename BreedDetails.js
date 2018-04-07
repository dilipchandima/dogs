import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { listSubBreeds } from './reducer';
import { getImage } from './reducer';

class BreedDetails extends Component {
  static navigationOptions = {
    title: 'BreedDetails'
  };

  renderItem = ({ item }) => (
    <Text style={styles.item}>{item}</Text>
  );

  componentDidMount() {
    const { name } = this.props.navigation.state.params
    this.props.listSubBreeds(name);
    this.props.getImage(name);
  }

  getNewImage = () => {
    const { name } = this.props.navigation.state.params
    this.props.getImage(name);
  }

  render() {
    const { name } = this.props.navigation.state.params
    const { subBreeds, loadingSubBreeds, imgUrl, loadingImg } = this.props;

    if (loadingSubBreeds && loadingImg) return <Text>Loading...</Text>;

    var listExist = <Text></Text>;
    if (subBreeds.length == 0) {
      listExist = <Text>No Existing Sub Breeds</Text>;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>SubBreeds - {name}</Text>
        <Image
          style={styles.imageStyle}
          source={{ uri: imgUrl }}
        />
        <Button
          onPress={() => this.getNewImage()}
          title="Load Random Image"
          color="#841584"
        />
        {listExist}
        <FlatList
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
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

const mapStateToProps = ({ subBreeds, loadingSubBreeds, imgUrl, loadingImg }) => {
  return {
    subBreeds,
    loadingSubBreeds,
    imgUrl,
    loadingImg
  };
};
const mapDispatchToProps = {
  listSubBreeds,
  getImage
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedDetails);