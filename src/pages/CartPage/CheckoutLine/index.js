import { Component } from 'react';

import './styles.scss';

export default class CheckoutLine extends Component {
  render() {
    return (
        <div className='cart-checkout-line'>
            <span className='cart-chechout-title'>
                {this.props.label}
            </span>
            <span className='cart-checkout-value'>
                {this.props.action}
                {this.props.additionalAction}
            </span>
        </div>
    )
  }
}
