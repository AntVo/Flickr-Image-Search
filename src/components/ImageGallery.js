import React, { Component } from 'react';
import ImageCard from './ImageCard';
import { connect } from 'react-redux';

class ImageGallery extends Component {
  render() {
    const images = this.props.images.map((imageData, index) => 
      <ImageCard
        key={index}
        title={imageData['title']}
        imageURL={imageData['media']['m']}
        link={imageData['link']}
      />
    );
    
    return (
      <div id="image-gallery">
        {images}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { images: state.images };
};

export default connect(mapStateToProps, null)(ImageGallery);