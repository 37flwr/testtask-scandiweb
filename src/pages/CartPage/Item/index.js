import { Component } from 'react'
import { connect } from 'react-redux'
import ItemDetails from './ItemDetails'
import PhotoPicker from './PhotoPicker'
import ItemQnt from './ItemQnt'

import './styles.scss'

class Item extends Component {
  state = {
    mainImg: 0
  }

  setNextImage() {
    if(this.props.item.item.gallery.length - 1 === this.state.mainImg) {
      this.setState({
        mainImg: 0
      })
    } else {
      this.setState({
        mainImg: this.state.mainImg + 1
      })
    }
  }

  setPreviousImage() {
    if(this.state.mainImg === 0) {
      this.setState({
        mainImg: this.props.item.item.gallery.length - 1
      })
    } else {
      this.setState({
        mainImg: this.state.mainImg - 1
      })
    }
  }
  render() {
    return (
      <>
        <div className='cart-item'>
            <ItemDetails item={this.props.item} />
            <div className='cart-item-right-side'>
              <ItemQnt
                cart={this.props.cart}
                item={this.props.item}
              />
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


export default connect(mapStateToProps, null)(Item)
