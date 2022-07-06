import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import IconCart from '../../../../assets/Cart.svg'
import './styles.scss'

export default class ProductCard extends Component {
    render() {
        return (
            <>
                {this.props.inStock? 
                    <div className='product-card active'>
                        <button className='add-to-cart' onClick={() => console.log(1)}>
                                <img src={IconCart} alt="Add to cart" />
                            </button>
                        <Link
                            to={`/item:${this.props.id}`}
                            className='product-card-wrapper'
                        >
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
                        </Link>
                    </div>
                :
                    <div className='product-card'>
                        <div className='product-card-wrapper'>
                            <div className='product-card-stock'>
                                Out of stock
                            </div>
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
                        </div>
                    </div>
                }
            </>
        )
    }
}
