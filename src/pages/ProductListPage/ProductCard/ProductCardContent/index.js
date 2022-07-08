import React, { Component } from 'react'
import './styles.scss'

export default class ProductCardContent extends Component {
    render() {
    return (
        <>
            <img 
                src={this.props.img} 
                alt={this.props.title} 
                className='product-card-img' 
            />
            <div className='product-card-details'>
                <span className='product-card-title'>
                    {this.props.title}
                </span>
                <div className='product-card-currency'>
                    <span>
                        {this.props.prices.filter(curr => 
                            curr.currency.label.toLowerCase() === this.props.currency
                        )[0].currency.symbol}
                    </span>
                    <span>
                        {this.props.prices.filter(curr => 
                            curr.currency.label.toLowerCase() === this.props.currency
                        )[0].amount}
                    </span>
                </div>
            </div>
        </>
    )
    }
}
