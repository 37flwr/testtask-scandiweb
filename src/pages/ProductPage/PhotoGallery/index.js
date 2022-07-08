import React, { Component } from 'react';
import './styles.scss';

export default class PhotoGallery extends Component {
  render() {
    return (
        <div className='product-photo-gallery'>
            {this.props.gallery.map((img, idx) => 
            <img
                key={idx}
                src={img}
                alt=""
                className='product-photo'
                onClick={() => this.props.onClick(img)} 
            />
            )}
        </div>
    )
  }
}
