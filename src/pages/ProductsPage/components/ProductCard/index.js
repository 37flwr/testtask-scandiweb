import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const mapThroughtCurrencies = (currencyArray) => {
    
}

export default class ProductCard extends Component {
    render() {
        console.log(this.props.prices);
        return (
            <>
                {this.props.inStock? 
                    <Link
                        to={`/${this.props.id}`}
                        className='product-card'
                    >
                        <div className='product-card-img-wrappper'>
                            <img 
                                src={this.props.img} 
                                alt={this.props.title} 
                                className='product-card-img' 
                            />
                            {!this.props.inStock && 
                                <div className='product-card-stock'>
                                    Out of stock
                                </div>
                            }
                        </div>
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
                    </Link>
                :
                    <div className='product-card'>
                        <div className='product-card-img-wrappper'>
                            <img 
                                src={this.props.img} 
                                alt={this.props.title} 
                                className='product-card-img' 
                            />
                            {!this.props.inStock && 
                                <div className='product-card-stock'>
                                    Out of stock
                                </div>
                            }
                        </div>
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
                }
            </>
        )
    }
}
