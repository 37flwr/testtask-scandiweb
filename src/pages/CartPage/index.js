import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import CheckoutLine from './CheckoutLine'
import { handleCountCartItems, handleCountCartTotal } from '../../utils'

import './styles.scss'

class CartPage extends Component {
    getAttributesForCheckout(attributes) {
        let output = ''
        for (const key in attributes) {
            output = output + key[0].toUpperCase() + key.slice(1) + ': ' + attributes[key] + '\n';
        }
        return output
    }

    render() {
        return (
            <section className='cart-page'>
                <h1 className='cart-page-heading'>
                    Cart
                </h1>
                <div className='cart-line' />
                {this.props.cart.cart.length > 0 ? 
                    <>
                        {this.props.cart.cart.map((item, idx) => 
                            <Item
                                key={idx}
                                item={item}
                            />
                        )}
                        <div className='cart-line' />
                        <div className='cart-checkout-part'>
                            <CheckoutLine 
                                label='Tax 21%:'
                                action={handleCountCartTotal(this.props.cart.cart, this.props.currency).currSymbol}
                                additionalAction={(handleCountCartTotal(this.props.cart.cart, this.props.currency).total * 0.21).toFixed(2)}
                            />
                            <CheckoutLine 
                                label='Quantity:'
                                action={handleCountCartItems(this.props.cart.cart)}
                            />
                            <CheckoutLine 
                                label='Total:'
                                action={handleCountCartTotal(this.props.cart.cart, this.props.currency).currSymbol}
                                additionalAction={handleCountCartTotal(this.props.cart.cart, this.props.currency).total}
                            />
                            <button
                                className='cart-checkout-btn'
                                onClick={() => {
                                    let res = `You ordered:\n\n`
                                    this.props.cart.cart.forEach((item) => {
                                        res = res + item.qnt + ' ' + item.item.name + ' ' + item.item.brand + '\n' + this.getAttributesForCheckout(item.attributes) + '\n'
                                    })
                                    res = res + 'Total: ' + handleCountCartTotal(this.props.cart.cart, this.props.currency).currSymbol + handleCountCartTotal(this.props.cart.cart, this.props.currency).total
                                    alert(res);
                                }}
                            >
                                Order
                            </button>
                        </div>
                    </>
                :
                    <h1 className='cart-is-empty'>
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