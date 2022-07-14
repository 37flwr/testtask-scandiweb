import React, { Component } from 'react'
import { connect } from 'react-redux';
import AttributesFormContainer from '../../../../../../../../Forms/AttributesForm/AttributesFormContainer'
import Attributes from './Attributes'
import './styles.scss'

class ItemDetails extends Component {
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
            {this.props.item.item.prices.map((curr, idx) => {
                if (curr.currency.label.toLowerCase() === this.props.currency.currency) {
                    return <span key={idx} className='item-price'>{curr.currency.symbol} {curr.amount}</span>
                }
            })}
            <div className='item-attr-container'>

                {/* {this.props.item.attributes?.map((attr, idx) => 
                    // <Attributes
                    //     key={idx}
                    //     attr={attr}
                    // />
                    )} */}
                    <AttributesFormContainer
                        initialValues={this.props.item.attributes}
                        values={this.props.item.item.attributes}
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

export default connect(mapStateToProps, null)(ItemDetails)
