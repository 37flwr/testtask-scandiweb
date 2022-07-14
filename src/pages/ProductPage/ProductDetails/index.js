import classNames from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCart } from '../../../store/actions';

import AttributesFormContainer from '../../../components/Forms/AttributesForm/AttributesFormContainer';
import diffenceBy from 'lodash/differenceBy'

import { handleAddToCart } from '../../../utils';

import './styles.scss';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
    state = {
        attributes: null,
    }

    setAttributes(attributes) {
        this.setState({
            attributes: attributes
        })
    }

    checkForPoductInCart() {
        if(this.props.cart.cart.filter(item => item.item.id === this.props.product.id).length > 0) {
            return true
        } 
        return false
    }

    render() {
    return (
        <div className='product-details'>
            <div className='product-vitals'>
                <span className='product-brand'>
                    {this.props.product.brand}
                </span>
                <span className='product-title'>
                    {this.props.product.name}
                </span>
            </div>
            <div className='product-attributes'>
                <AttributesFormContainer
                    initialValues={this.props.product.attributes}
                    handleSubmit={this.setAttributes.bind(this)}
                    atCart={this.checkForPoductInCart()} />
                <div className='product-price'>
                    <span className='product-price-heading'>
                        Price:
                    </span>
                    <div className='product-price-value'>
                        <span>
                            {this.props.product.prices.filter(curr => 
                                curr.currency.label.toLowerCase() === this.props.currency.currency
                                )[0].currency.symbol}
                        </span>
                        <span>
                            {this.props.product.prices.filter(curr => 
                                curr.currency.label.toLowerCase() === this.props.currency.currency
                                )[0].amount}
                        </span>
                    </div>
                </div>
                
                {this.checkForPoductInCart() ?
                    <div className='cart-not-active'>
                        <div className='add-to-cart-btn disabled'>
                            Already at cart
                        </div>
                        <Link to='/cart' className='cart-link'>
                            Go to cart
                        </Link>
                    </div>
                    :
                    <button 
                    className='add-to-cart-btn'
                    onClick={() => {
                        this.props.changeCart(handleAddToCart(this.props.cart, this.props.product, this.state.attributes))
                    }}
                    >
                        Add to cart
                    </button>
                }
                <span dangerouslySetInnerHTML={{ __html: this.props.product.description }} />
            </div>
        </div>
    )
  }
}
const mapStateToProps = state => ({
    currency: state.Currency,
    cart: state.Cart,
})

const mapDispatchToProps = dispatch => {
  return {
    changeCart: product => {
      dispatch(changeCart(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)