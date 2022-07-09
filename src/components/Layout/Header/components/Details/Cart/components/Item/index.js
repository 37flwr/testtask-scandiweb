import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCart } from '../../../../../../../../store/actions'
import { handleAddToCart, handleRemoveFromCart } from '../../../../../../../../utils/cartActions'
import ItemDetails from './ItemDetails'
import './styles.scss'

class Item extends Component {
  render() {
    return (
        <div className='dropdown-cart-item'>
            <ItemDetails item={this.props.item} />
            <div className='cart-item-right-side'>
              <div className='cart-item-qnt'>
                  <div className='cart-item-qnt-handler' onClick={() => this.props.changeCart(handleAddToCart(this.props.cart, this.props.item.item))}>
                      +
                  </div>
                  <span>
                      {this.props.item.qnt}
                  </span>
                  <div className='cart-item-qnt-handler' onClick={() => this.props.changeCart(handleRemoveFromCart(this.props.cart, this.props.item.item))}>
                      -
                  </div>
              </div>
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
