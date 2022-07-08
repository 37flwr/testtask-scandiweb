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
                <span className='product-card-currency'>
                    {this.props.prices.map((curr) => {
                        if (curr.currency.label.toLowerCase() === this.props.currency) {
                            return <div>{curr.currency.symbol} {curr.amount}</div>
                        }
                    })}
                </span>
            </div>
        </>
    )
    }
}
