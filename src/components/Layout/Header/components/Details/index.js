import React, { Component } from 'react'
import CurrencyFormContainer from '../../../../Forms/CurrencyForm/CurrencyFormContainer'
import IconCart from '../../../../../assets/Cart.svg'
import './styles.scss'

export default class Details extends Component {
  render() {
    return (
      <div className='details'>
        <CurrencyFormContainer />
        <img src={IconCart} alt="" className='cart-icon' />
      </div>
    )
  }
}
