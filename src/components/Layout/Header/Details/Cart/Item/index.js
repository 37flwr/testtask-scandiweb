import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemDetails from './ItemDetails'
import ItemQnt from './ItemQnt'
import { changeCart } from '../../../../../../store/actions'

import './styles.scss'

class Item extends Component {
  render() {
    return (
        <div className='dropdown-cart-item'>
            <ItemDetails item={this.props.item} />
            <div className='cart-item-right-side'>
              <ItemQnt
                cart={this.props.cart}
                item={this.props.item}
                changeCart={this.props.changeCart}
                closeCart={this.props.handleCloseCart}
              />
              <img
                src={this.props.item.item.gallery[0]}
                alt=""
                className='cart-item-photo'
              />
            </div>
        </div>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Item)
