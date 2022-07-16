import { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeCart } from '../../../../store/actions';
import { handleAddToCart } from '../../../../utils';

import './styles.scss';

class ProductPageButton extends Component {
    checkForPoductInCart() {
        if(this.props.cart.cart?.filter(item => item.item.id === this.props.product.id).length > 0) {
            return true
        } 
        return false
    }

  render() {
    return (
        this.checkForPoductInCart() ?
            <div className='cart-not-active'>
                <div className='add-to-cart-btn disabled'>
                    Already at cart
                </div>
                <Link to='/cart' className='cart-link'>
                    Go to cart
                </Link>
            </div>
            :
            <button 
                className='add-to-cart-btn'
                onClick={() => {
                    this.props.changeCart(handleAddToCart(this.props.cart, this.props.product, this.props.attributes))
                }}
            >
                Add to cart
            </button>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCart: product => {
      dispatch(changeCart(product))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductPageButton)