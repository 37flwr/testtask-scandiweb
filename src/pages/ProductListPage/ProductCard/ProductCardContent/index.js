import React, { Component } from 'react'

import './styles.scss'

export default class ProductCardContent extends Component {
    renderProductCurrency() {
        const result = this.props.prices.filter(currency => currency.currency.label.toLowerCase() === this.props.currency)[0]
        if(result) {
            return <span className='product-list-card-currency'>{result.currency.symbol}{result.amount}</span>
        }
    }

    render() {
        return (
            <>
                <img 
                    src={this.props.img} 
                    alt={this.props.title} 
                    className='product-list-card-img' 
                />
                <div className='product-list-card-details'>
                    <span className='product-list-card-title'>
                        {this.props.title}
                    </span>
                    {this.renderProductCurrency()}
                </div>
            </>
        )
    }
}
