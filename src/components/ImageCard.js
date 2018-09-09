import React, { Component } from 'react';

export default class ImageCard extends Component {
  render() {
    return (
    	<div className="image-card">
      	<img src={this.props.imageURL} alt={this.props.title}></img>
      </div>
    );
  }
}