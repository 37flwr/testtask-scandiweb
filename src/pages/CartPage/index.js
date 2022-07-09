import React, { Component } from 'react'
import { connect } from 'react-redux'

import Item from './Item'

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
    cart: state.Cart
});

export default connect(mapStateToProps, null)(CartPage)