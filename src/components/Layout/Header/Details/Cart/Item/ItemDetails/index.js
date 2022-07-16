import React, { Component } from 'react'
import { connect } from 'react-redux';
import AttributesFormContainer from '../../../../../../Forms/AttributesForm/AttributesFormContainer'
import { changeCart } from '../../../../../../../store/actions';
import { handleChangeAttributes } from '../../../../../../../utils'

import './styles.scss'

class ItemDetails extends Component {
    renderItemPrice() {
        const priceDetails = this.props.item.item.prices.filter(curr => curr.currency.label.toLowerCase() === this.props.currency)
        return <span className='dropdown-cart-item-price'>{priceDetails[0].currency.symbol} {priceDetails[0].amount}</span>
    }

    render() {
        return (
        <div className='dropdown-cart-item-details'>
            <div className='dropdown-cart-item-vitals'>
                <span>
                    {this.props.item.item.brand}
                </span>
                <span>
                    {this.props.item.item.name}
                </span>
            </div>
            {this.renderItemPrice()}
            <div className='dropdown-cart-item-attr-container'>
                <AttributesFormContainer
                    initialValues={this.props.item.attributes}
                    values={this.props.item.item.attributes}
                    itemId={this.props.item.item.id}
                    type='dropdown'
                    handleSubmit={(vals) => this.props.changeCart(handleChangeAttributes(vals, this.props.item.item, this.props.cart))}
                />
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    currency: state.Currency.currency,
    cart: state.Cart
});

const mapDispatchToProps = dispatch => {
  return {
    changeCart: product => {
      dispatch(changeCart(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)
