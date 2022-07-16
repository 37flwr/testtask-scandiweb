import { Component } from 'react';
import { connect } from 'react-redux';
import { changeCart } from '../../../../store/actions';
import { handleAddToCart, handleRemoveFromCart } from '../../../../utils';

import './styles.scss';

class ItemQnt extends Component {
    render() {
        return (
            <div className='cart-item-qnt'>
                <div className='cart-item-qnt-handler' onClick={() => this.props.changeCart(handleAddToCart(this.props.cart, this.props.item.item))}>
                    +
                </div>
                <span className='cart-item-qnt-value'>
                    {this.props.item.qnt}
                </span>
                <div className='cart-item-qnt-handler' onClick={() => this.props.changeCart(handleRemoveFromCart(this.props.cart, this.props.item.item))}>
                    -
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
  return {
    changeCart: product => {
      dispatch(changeCart(product))
    }
  }
}

export default connect(null, mapDispatchToProps)(ItemQnt)
