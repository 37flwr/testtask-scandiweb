import React, { Component } from 'react'
import './styles.scss'

export default class Attributes extends Component {
  render() {
    return (
        <div className='item-attr-content'>
            <span>
                {this.props.attr.name}:
            </span>
            {this.props.attr.type === 'text' ?
                <div className='item-attr-list'>
                    {this.props.attr.items.map((item, idx) => 
                        <div key={idx} className='item-attr-text'>
                            {item.value}
                        </div>
                    )}
                </div>
            :
                <div className='item-attr-list-color'>
                    {this.props.attr.items.map((item, idx) => 
                        <div key={idx} className='item-attr-color' style={{'backgroundColor': item.value}}/>
                    )}
                </div>
            }
        </div>
    )
  }
}
