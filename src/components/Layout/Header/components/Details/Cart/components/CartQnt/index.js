import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleCountCartItems } from '../../../../../../../../utils';
import './styles.scss'


class CartQnt extends Component {
  render() {
    return (
        <div className='dropdown-cart-qnt'>
            <span>
                <b>My Bag,</b>
            </span>
            <span>
                {handleCountCartItems(this.props.cart.cart)} {handleCountCartItems(this.props.cart.cart) > 1 ? 'items' : 'item'}
            </span>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    cart: state.Cart
});

export default connect(mapStateToProps, null)(CartQnt)