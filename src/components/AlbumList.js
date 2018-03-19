import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then(function (response) {
       this.setState({ albums: response.data });
    });
  }

  // async function getAlbumsFromApi() {
  //   try {
  //     const response = await ;
  //     this.setState({ albums: response.data });
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  renderAlbums() {
    return this.state.albums.map(album =>
      <Text>{album.title}</Text>
    );
  }

  render() {
    return (
      <View> { this.renderAlbums() }</View>
    );
  }
}
