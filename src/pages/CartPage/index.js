import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

class CartPage extends Component {
    render() {
        console.log(this.props.cart);
        return (
            <div>{this.props.cart.cart}</div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.Cart
});

export default connect(mapStateToProps, null)(CartPage)