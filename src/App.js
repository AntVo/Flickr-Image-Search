import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';

import './App.css';
import 'bulma/css/bulma.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1 className="title is-4">Flickr Image Search</h1>
        <SearchBar  />
        <ImageGallery  />
      </div>
    );
  }
}

