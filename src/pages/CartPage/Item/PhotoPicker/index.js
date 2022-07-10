import React, { Component } from 'react'
import classNames from 'classnames'
import { ReactComponent as Arrow } from '../../../../assets/Arrow.svg'
import './styles.scss'

export default class PhotoPicker extends Component {
  render() {
    return (
        <div className='cart-item-photo-picker' onClick={() => this.props.clickHandler()} >
            <Arrow className={classNames('photo-picker-arrow', this.props.customClassName)} />
        </div>
    )
  }
}
