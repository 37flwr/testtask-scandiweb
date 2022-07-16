import React, { Component } from 'react';

import './styles.scss';

export default class ProductPrice extends Component {
    renderProductPrice() {
        const result = this.props.product.prices.filter(curr => 
            curr.currency.label.toLowerCase() === this.props.currency)[0]
        return <span className='product-price-value'>{result.currency.symbol}{result.amount}</span>
    }

    render() {
        return (
            <div className='product-price'>
                <span className='product-price-heading'>
                    Price:
                </span>
                {this.renderProductPrice()}
            </div>
        )
    }
}
