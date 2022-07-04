import React, { Component } from 'react'
import CurrencyFormContainer from '../../../../Forms/CurrencyForm/CurrencyFormContainer'
import Cart from './Cart'
import './styles.scss'

export default class Details extends Component {
  render() {
    return (
      <div className='details'>
        <CurrencyFormContainer />
        <Cart />
      </div>
    )
  }
}
