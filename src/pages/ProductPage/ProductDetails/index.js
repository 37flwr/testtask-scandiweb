import classNames from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AttributesFormContainer from '../../../components/Forms/AttributesForm/AttributesFormContainer';

import { changeCart } from '../../../store/actions';
import { handleAddToCart } from '../../../utils';

import './styles.scss';

class ProductDetails extends Component {
    getLocationSearch(location) {
        const attributesArray = location.replaceAll('%20', ' ').slice(1).split('&')
        return attributesArray
    }

    setActiveArrtibutes(idx, childIdx) {
        if(this.props.product.attributes[idx].items[childIdx].value === this.getLocationSearch(window.location.search)[idx].split('=')[1]) {
            return true
        } return false
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
                <AttributesFormContainer initialValues={this.props.product.attributes} />
                <div className='product-price'>
                    <span className='product-price-heading'>
                        Price:
                    </span>
                    <div className='product-price-value'>
                        <span>
                            {this.props.product.prices.filter(curr => 
                                curr.currency.label.toLowerCase() === this.props.currency
                                )[0].currency.symbol}
                        </span>
                        <span>
                            {this.props.product.prices.filter(curr => 
                                curr.currency.label.toLowerCase() === this.props.currency
                                )[0].amount}
                        </span>
                    </div>
                </div>
                <button 
                    className='add-to-cart-btn'
                    onClick={() => {
                        this.props.changeCart(handleAddToCart(this.props.cart, this.props.product))
                    }}
                >
                    Add to cart
                </button>
                <span dangerouslySetInnerHTML={{ __html: this.props.product.description }} />
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    cart: state.Cart,
    currency: state.Currency.currency
});

const mapDispatchToProps = dispatch => {
  return {
    changeCart: product => {
      dispatch(changeCart(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)