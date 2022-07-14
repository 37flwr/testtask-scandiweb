import React, { Component } from 'react'
import { useParams } from 'react-router';
import { connect } from 'react-redux';

import PhotoGallery from './PhotoGallery';
import ProductDetails from './ProductDetails';
import Loader from '../../components/Loader';

import { handleProductFetch } from '../../utils';

import './styles.scss'

class ProductPage extends Component {
  state = {
    product: null,
  }

  async componentDidMount() {
    const product = await handleProductFetch(this.props.params.id.slice(1))
    this.setState({
      type: this.props.params.id.slice(1),
      product: product,
      mainImg: product.gallery[0]
    })
  }

  async componentDidUpdate(prevState) {
    if(prevState.params.id !== this.props.params.id) {
      const product = await handleProductFetch(this.props.params.id.slice(1))
      this.setState({
        type: this.props.params.id.slice(1),
        product: product,
        mainImg: product.gallery[0]
      })
    }
  }

  updateMainPhoto(img) {
    this.setState({
      mainImg: img
    })
  }

  
  render() {
    return (
      <section className='product-page'>
        {this.state.product ?
          <>
            <PhotoGallery
              gallery={this.state.product?.gallery}
              onClick={this.updateMainPhoto.bind(this)}
            />
            <div className='product-main-photo'>
              <img src={this.state.mainImg} alt="" />
            </div>
            <ProductDetails 
              product={this.state.product}
            />
          </>
        :
          <div className='loader-container'>
            <Loader />
          </div>
        }
      </section>
    )
  }
}

const withParams = (Component) => {
  return props => <Component {...props} params={useParams()} />;
}

export default withParams(ProductPage)