import React, { Component } from 'react'
import './styles.scss'

export default class Attributes extends Component {
  render() {
    return (
        <div className='cart-item-attr-content'>
            <span className='cart-item-attr-heading'>
                {this.props.attr.name}:
            </span>
            {this.props.attr.type === 'text' ?
                <div className='cart-item-attr-list attr-list-text'>
                    {this.props.attr.items.map((item) => 
                        <div className='cart-item-attr-text'>
                            {item.value}
                        </div>
                    )}
                </div>
            :
                <div className='cart-item-attr-list attr-list-color'>
                    {this.props.attr.items.map((item) => 
                        <div className='cart-item-attr-color' style={{'backgroundColor': item.value}}/>
                    )}
                </div>
            }
        </div>
    )
  }
}
