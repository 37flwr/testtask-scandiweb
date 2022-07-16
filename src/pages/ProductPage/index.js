import React, { Component } from 'react'
import { useParams } from 'react-router';
import PhotoGallery from './PhotoGallery';
import ProductDetails from './ProductDetails';
import Loader from '../../components/Loader';
import { handleProductFetch } from '../../utils';

import './styles.scss'

class ProductPage extends Component {
  state = {
    product: null,
    mainImg: null
  }

  // Lifecycles
  async componentDidMount() {
    const product = await handleProductFetch(this.props.params.id.slice(1))
    this.setState({
      product: product,
      mainImg: product.gallery[0]
    })
  }

  async componentDidUpdate(prevState) {
    if(prevState.params.id !== this.props.params.id) {
      const product = await handleProductFetch(this.props.params.id.slice(1))
      this.setState({
        product: product,
        mainImg: product.gallery[0]
      })
    }
  }

  // Handlers
  updateMainPhoto(img) {
    this.setState({
      mainImg: img
    })
  }

  
  render() {
    return (
      <section className='product-page'>
        {this.state.product && this.state.mainImg ?
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