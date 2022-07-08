import React, { Component } from 'react'
import { useParams } from 'react-router';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';

import { changeCart } from '../../store/actions';
import { handleProductFetch, handleAddToCart } from '../../utils'

import './styles.scss'
import PhotoGallery from './PhotoGallery';
import ProductDetails from './ProductDetails';

class ProductPage extends Component {

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
        {this.state ?
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

const mapStateToProps = state => ({
    cart: state.Cart
});

const mapDispatchToProps = dispatch => {
  return {
    changeCart: product => {
      dispatch(changeCart(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withParams(ProductPage))