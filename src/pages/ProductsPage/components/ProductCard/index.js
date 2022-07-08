import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeCart } from '../../../../store/actions'
import IconCart from '../../../../assets/Cart.svg'
import './styles.scss'

const handleCardChange = (cart, newItem) => {
    const tempArr = cart.cart

    if(cart.cart) {
        let changed = false
        tempArr.map((item, idx) => 
        {
            if(item.item.id === newItem.id) {
            tempArr[idx].qnt += 1
            changed = true
            }
        }
        )
        if(!changed) {
        tempArr.push({
            qnt: 1,
            item: newItem
        })
        return tempArr
        }
        return tempArr
    }
    return [{qnt: 1, item: newItem}]
}

class ProductCard extends Component {
    render() {
        return (
            <>
                {this.props.inStock? 
                    <div className='product-card active'>
                        <button className='add-to-cart' onClick={() => this.props.changeCart(handleCardChange(this.props.cart, this.props.item))}>
                            <img src={IconCart} alt="Add to cart" />
                        </button>
                        <Link
                            to={`/item:${this.props.id}`}
                            className='product-card-wrapper'
                        >
                            <img 
                                src={this.props.img} 
                                alt={this.props.title} 
                                className='product-card-img' 
                            />
                            <div className='product-card-details'>
                                <span className='product-card-title'>
                                    {this.props.title}
                                </span>
                                <span className='product-card-currency'>
                                    {this.props.prices.map((curr) => {
                                        if (curr.currency.label.toLowerCase() === this.props.currency) {
                                            return <div>{curr.currency.symbol} {curr.amount}</div>
                                        }
                                    })}
                                </span>
                            </div>
                        </Link>
                    </div>
                :
                    <div className='product-card'>
                        <div className='product-card-wrapper'>
                            <div className='product-card-stock'>
                                Out of stock
                            </div>
                            <img 
                                src={this.props.img} 
                                alt={this.props.title} 
                                className='product-card-img' 
                            />
                            <div className='product-card-details'>
                                <span className='product-card-title'>
                                    {this.props.title}
                                </span>
                                <span className='product-card-currency'>
                                    {this.props.prices.map((curr) => {
                                        if (curr.currency.label.toLowerCase() === this.props.currency) {
                                            return <div>{curr.currency.symbol} {curr.amount}</div>
                                        }
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                }
            </>
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