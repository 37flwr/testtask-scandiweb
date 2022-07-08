import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { changeCart } from '../../../store/actions'
import { handleAddToCart } from '../../../utils'

import IconCart from '../../../assets/Cart.svg'

import './styles.scss'
import ProductCardContent from './ProductCardContent'
import classNames from 'classnames'

class ProductCard extends Component {
    render() {
        return (
                <div className={classNames('product-card', this.props.inStock && 'active')}>
                {this.props.inStock? 
                    <>
                        <button className='add-to-cart-btn' onClick={() => this.props.changeCart(handleAddToCart(this.props.cart, this.props.item))}>
                            <img src={IconCart} alt="Add to cart" />
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