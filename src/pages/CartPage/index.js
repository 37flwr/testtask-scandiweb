import React, { Component } from 'react'
import { connect } from 'react-redux'

import Item from './Item'

import { handleCountCartItems, handleCountCartTotal } from '../../utils'

import './styles.scss'

class CartPage extends Component {
    render() {
        console.log(this.props.cart.cart);
        return (
            <section className='cart-page'>
                <h1 className='cart-page-heading'>
                    Cart
                </h1>
                <div className='cart-line' />
                {this.props.cart.cart && this.props.cart.cart.length > 0 ? 
                    <>
                        {this.props.cart.cart.map((item) => 
                            <Item item={item} />
                        )}
                        <div className='cart-line' />
                        <div className='cart-checkout-part'>
                            <div className='cart-checkout-line'>
                                <span className='cart-chechout-title'>
                                    Tax 21%:
                                </span>
                                <span className='cart-checkout-value'>
                                    {handleCountCartTotal(this.props.cart.cart, this.props.currency).currSymbol}{(handleCountCartTotal(this.props.cart.cart, this.props.currency).total * 0.21).toFixed(2)}
                                </span>
                            </div>
                            <div className='cart-checkout-line'>
                                <span className='cart-chechout-title'>
                                    Quantity:
                                </span>
                                <span className='cart-checkout-value'>
                                    {handleCountCartItems(this.props.cart.cart)}
                                </span>
                            </div>
                            <div className='cart-checkout-line'>
                                <span className='cart-chechout-title'>
                                    Total:
                                </span>
                                <span className='cart-checkout-value'>
                                    {handleCountCartTotal(this.props.cart.cart, this.props.currency).currSymbol}{handleCountCartTotal(this.props.cart.cart, this.props.currency).total}
                                </span>
                            </div>
                            <button className='cart-checkout-btn'>
                                Order
                            </button>
                        </div>
                    </>
                :
                    <h1>
                        Your cart is empty
                    </h1>
                }
            </section>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.Cart,
    currency: state.Currency
});

export default connect(mapStateToProps, null)(CartPage)