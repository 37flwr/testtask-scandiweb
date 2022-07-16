import React, { Component } from 'react';
import { handleCountCartTotal } from '../../../../../../utils';

import './styles.scss';

export default class CartTotal extends Component {
    render() {
        return (
            <div className='cart-total'>
                <span className='cart-total-label'>
                    <b>Total</b>
                </span>
                <span className='cart-total-value'>
                    <b>{handleCountCartTotal(this.props.cart, this.props.currency).currSymbol}{handleCountCartTotal(this.props.cart, this.props.currency).total}</b>
                </span>
            </div>
        )
    }
}
