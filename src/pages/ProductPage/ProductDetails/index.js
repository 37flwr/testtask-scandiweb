import classNames from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCart } from '../../../store/actions';

import AttributesFormContainer from '../../../components/Forms/AttributesForm/AttributesFormContainer';

import { handleAddToCart } from '../../../utils';

import './styles.scss';
import { Link } from 'react-router-dom';
import ProductPrice from './ProductPrice';
import ProductPageButton from './ProductPageButton';

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
        if(this.props.cart.cart?.filter(item => item.item.id === this.props.product.id).length > 0) {
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
                    values={this.props.product.attributes}
                    initialValues={this.props.cart.cart?.filter(item => item.item.id === this.props.product.id)[0]?.attributes}
                    itemId={this.props.product.id}
                    handleSubmit={this.setAttributes.bind(this)}
                    atCart={this.checkForPoductInCart()}
                />
                <ProductPrice
                    product={this.props.product}
                    currency={this.props.currency}
                />
                <ProductPageButton
                    cart={this.props.cart}
                    product={this.props.product}
                    attributes={this.state.attributes}
                />
                <span className='product-description' dangerouslySetInnerHTML={{ __html: this.props.product.description }} />
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    currency: state.Currency.currency,
    cart: state.Cart,
})

export default connect(mapStateToProps, null)(ProductDetails)