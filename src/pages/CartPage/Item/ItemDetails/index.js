import React, { Component } from 'react'
import { connect } from 'react-redux';
import AttributesFormContainer from '../../../../components/Forms/AttributesForm/AttributesFormContainer';
import { changeCart } from '../../../../store/actions';
import { handleChangeAttributes } from '../../../../utils'
import Attributes from './Attributes'
import './styles.scss'

class ItemDetails extends Component {
    render() {
        return (
        <div className='cart-item-details'>
            <div className='cart-item-vitals'>
                <span className='cart-item-brand'>
                    {this.props.item.item.brand}
                </span>
                <span className='cart-item-name'>
                    {this.props.item.item.name}
                </span>
            </div>
            {this.props.item.item.prices.map((curr, idx) => {
                if (curr.currency.label.toLowerCase() === this.props.currency.currency) {
                    return <span key={idx} className='cart-item-price'>{curr.currency.symbol} {curr.amount}</span>
                }
            })}
            <div className='cart-item-attr-container'>
                <AttributesFormContainer 
                    initialValues={this.props.item.attributes}
                    values={this.props.item.item.attributes}
                    itemId={this.props.item.item.id}
                    handleSubmit={(vals) => this.props.changeCart(handleChangeAttributes(vals, this.props.item.item, this.props.cart))}
                />
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    currency: state.Currency,
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
