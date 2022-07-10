import React, { Component } from 'react'
import { connect } from 'react-redux';
import Attributes from './Attributes'
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
            <span className='item-price'>
                {this.props.item.item.prices.map((curr) => {
                    if (curr.currency.label.toLowerCase() === this.props.currency.currency) {
                        return <>{curr.currency.symbol} {curr.amount}</>
                    }
                })}
            </span>
            <div className='item-attr-container'>
                {this.props.item.item?.attributes?.map((attr, idx) => 
                    <Attributes
                        key={idx}
                        attr={attr}
                    />
                )}
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    currency: state.Currency
});

export default connect(mapStateToProps, null)(ItemDetails)
