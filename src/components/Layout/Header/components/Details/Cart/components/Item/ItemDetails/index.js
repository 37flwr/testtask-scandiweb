import React, { Component } from 'react'
import { connect } from 'react-redux';
import AttributesFormContainer from '../../../../../../../../Forms/AttributesForm/AttributesFormContainer'
import { handleChangeAttributes } from '../../../../../../../../../utils'
import { changeCart } from '../../../../../../../../../store/actions';
import './styles.scss'

class ItemDetails extends Component {
    render() {
        return (
        <div className='item-details'>
            <div className='item-vitals'>
                <span>
                    {this.props.item.item.brand}
                </span>
                <span>
                    {this.props.item.item.name}
                </span>
            </div>
            {this.props.item.item.prices.map((curr, idx) => {
                if (curr.currency.label.toLowerCase() === this.props.currency.currency) {
                    return <span key={idx} className='item-price'>{curr.currency.symbol} {curr.amount}</span>
                }
            })}
            <div className='item-attr-container'>
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
