import { Component } from 'react';
import { handleAddToCart, handleRemoveFromCart } from '../../../../../../../utils';

import './styles.scss';

export default class ItemQnt extends Component {
  render() {
    return (
        <div className='dropdown-cart-item-qnt'>
            <button
                className='dropdown-cart-item-qnt-handler'
                onClick={() => this.props.changeCart(
                    handleAddToCart(
                        this.props.cart,
                        this.props.item.item
                    )
                )}
            >
                +
            </button>
            <span className='dropdown-cart-item-qnt-value'>
                {this.props.item.qnt}
            </span>
            <button
                className='dropdown-cart-item-qnt-handler'
                onClick={() => this.props.changeCart(
                    handleRemoveFromCart(
                        this.props.cart,
                        this.props.item.item,
                        this.props.closeCart
                    )
                )}
            >
                -
            </button>
        </div>
    )
  }
}
