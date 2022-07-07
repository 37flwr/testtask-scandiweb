import React, { Component } from 'react'
import Attribute from './Attribute'
import './styles.scss'

export default class ItemDetails extends Component {
    render() {
        console.log(this.props.item);
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
            <span className='item-price'>
                12
            </span>
            <div className='item-attr-container'>
                {this.props.item.item?.attributes?.map((attr) => 
                    <Attribute attr={attr} />
                )}
            </div>
        </div>
    )
  }
}
