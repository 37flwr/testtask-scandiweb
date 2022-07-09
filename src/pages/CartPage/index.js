import React, { Component } from 'react'
import { connect } from 'react-redux'

import Item from './Item'

import './styles.scss'

class CartPage extends Component {
    render() {
        return (
            <section className='cart-page'>
                <h1 className='cart-page-heading'>
                    Cart
                </h1>
                <div className='cart-line' />
                {this.props.cart.cart.map((item) => 
                    <Item item={item} />
                )}
                <div className='cart-line' />
            </section>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.Cart
});

export default connect(mapStateToProps, null)(CartPage)