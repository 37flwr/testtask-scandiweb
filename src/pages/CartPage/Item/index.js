import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCart } from '../../../store/actions'
import { handleAddToCart, handleRemoveFromCart } from '../../../utils'
import ItemDetails from './ItemDetails'
import { ReactComponent as Arrow } from '../../../assets/Arrow.svg'
import './styles.scss'
import PhotoPicker from './PhotoPicker'

class Item extends Component {
  state = {
    mainImg: 0
  }

  setNextImage() {
    if(this.props.item.item.gallery.length-1 === this.state.mainImg) {
      this.setState({
        mainImg: 0
      })
    } else {
      this.setState({
        mainImg: this.state.mainImg+1
      })
    }
  }

  setPreviousImage() {
    if(this.state.mainImg === 0) {
      this.setState({
        mainImg: this.props.item.item.gallery.length-1
      })
    } else {
      this.setState({
        mainImg: this.state.mainImg-1
      })
    }
  }
  render() {
    console.log(this.props.item.item.gallery);
    console.log(this.state.mainImg);
    return (
      <>
        <div className='cart-item'>
            <ItemDetails item={this.props.item} />
            <div className='cart-item-right-side'>
              <div className='cart-item-qnt'>
                  <div className='cart-item-qnt-handler' onClick={() => this.props.changeCart(handleAddToCart(this.props.cart, this.props.item.item))}>
                      +
                  </div>
                  <span>
                      {this.props.item.qnt}
                  </span>
                  <div className='cart-item-qnt-handler' onClick={() => this.props.changeCart(handleRemoveFromCart(this.props.cart, this.props.item.item))}>
                      -
                  </div>
              </div>
              <div className='cart-item-photo'>
                <img
                    src={this.props.item.item.gallery[this.state.mainImg]}
                    alt=""
                    className='cart-item-main-photo'
                />
                <div className='cart-item-photo-pickers'>
                  <PhotoPicker
                    clickHandler={this.setPreviousImage.bind(this)}
                    customClassName='picker-backward'
                  />
                  <PhotoPicker
                    clickHandler={this.setNextImage.bind(this)}
                    customClassName='picker-forward'
                  />
                </div>
              </div>
            </div>
        </div>
        <div className='cart-line' />
      </>
    )
  }
}

const mapStateToProps = state => ({
    cart: state.Cart
});

const mapDispatchToProps = dispatch => {
  return {
    changeCart: product => {
      dispatch(changeCart(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
