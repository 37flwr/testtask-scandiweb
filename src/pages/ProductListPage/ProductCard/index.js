import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'

import ProductCardContent from './ProductCardContent'

import { changeCart } from '../../../store/actions'
import { handleAddToCart } from '../../../utils'

import {ReactComponent as IconCart } from '../../../assets/Cart.svg'

import './styles.scss'

class ProductCard extends Component {
    setLocationSearch(item) {
        let search = '?';
        item.attributes.map((attribute, idx) => {
            const value = attribute.type === 'swatch' ? attribute.items[0].value.slice(1).toLowerCase() : attribute.items[0].value
            search = search + attribute.id.toLowerCase() + '=' + value
            if(idx !== item.attributes.length-1) {
                search = search + '&'
            }
        })
        return search
    }

    setAttributes(attributes) {
        const attributesOutput = {}
        attributes.map((attrGroup) => {
            attributesOutput[attrGroup.name.toLowerCase()] = attrGroup.items[0].value
        })
        return attributesOutput
    }

    render() {
        console.log(this.props.item.attributes);
        return (
            <div className={classNames('product-card', this.props.inStock && 'active')}>
                {this.props.inStock? 
                    <>
                        <button className='add-to-cart-btn' onClick={() => this.props.changeCart(handleAddToCart(this.props.cart, this.props.item, this.setAttributes(this.props.item.attributes)))}>
                            <IconCart className='add-to-cart-img' />
                        </button>
                        <Link
                            to={`/item:${this.props.id}`}
                            className='product-card-container'
                        >
                            <ProductCardContent 
                                img={this.props.img}
                                title={this.props.title}
                                prices={this.props.prices}
                                currency={this.props.currency}
                            />
                        </Link>
                    </>
                :
                    <>
                        <div className='product-stock-status'>
                            Out of stock
                        </div>
                        <div className='product-card-container out-of-stock'>
                            <ProductCardContent 
                                img={this.props.img}
                                title={this.props.title}
                                prices={this.props.prices}
                                currency={this.props.currency}
                            />
                        </div>
                    </>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.Cart
});

const mapDispatchToProps = dispatch => {
  return {
    changeCart: product => {
      dispatch(changeCart(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)