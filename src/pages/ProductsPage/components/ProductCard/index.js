import React, { Component } from 'react'
import './styles.scss'

export default class ProductCard extends Component {
    render() {
        console.log(this.props);
        return (
        <div className='product-card'>
            <img 
                src={this.props.img} 
                alt={this.props.title} 
                className='product-card-img' 
            />
            <span className='product-card-title'>
                {this.props.title}
            </span>
            <span className='product-card-currency'>
                {this.props.prices[0].amount}
            </span>
        </div>
        )
    }
}
