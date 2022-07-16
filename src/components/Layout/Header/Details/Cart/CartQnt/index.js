import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleCountCartItems } from '../../../../../../utils';

import './styles.scss'

class CartQnt extends Component {
  render() {
    return (
        <div className='dropdown-cart-qnt'>
            <span className='dropdown-cart-qnt-label'>
                <b>My Bag,</b>
            </span>
            <span className='dropdown-cart-qnt-value'>
                {handleCountCartItems(this.props.cart)} {handleCountCartItems(this.props.cart) > 1 ? 'items' : 'item'}
            </span>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    cart: state.Cart.cart
});

export default connect(mapStateToProps, null)(CartQnt)