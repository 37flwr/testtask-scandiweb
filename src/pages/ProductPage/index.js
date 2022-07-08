import React, { Component } from 'react'
import { useParams } from 'react-router';
import ApolloClient, { gql } from 'apollo-boost'
import { connect } from 'react-redux';
import { changeCart } from '../../store/actions';
import { handleProductFetch } from '../../utils'
import './styles.scss'


const handleCardChange = (cart, newItem) => {
  const tempArr = cart.cart

  if(cart.cart) {
    let changed = false
    tempArr.map((item, idx) => 
      {
        if(item.item.id === newItem.id) {
          tempArr[idx].qnt += 1
          changed = true
        }
      }
    )
    if(!changed) {
      tempArr.push({
        qnt: 1,
        item: newItem
      })
      return tempArr
    }
    return tempArr
  }
  return [{qnt: 1, item: newItem}]
}

class ProductPage extends Component {

  async componentDidMount() {
    const product = await handleProductFetch(this.props.params.id.slice(1))
    this.setState({
      type: this.props.params.id.slice(1),
      product: product,
      mainImg: product.gallery[0]
    })
  }

  async componentDidUpdate(prevState) {
    if(prevState.params.id !== this.props.params.id) {
      const product = await handleProductFetch(this.props.params.id.slice(1))
      this.setState({
        type: this.props.params.id.slice(1),
        product: product,
        mainImg: product.gallery[0]
      })
    }
  }
  
  render() {
    return (
      <section className='item-page'>
        <div className='item-photos-gallery'>
          {this.state?.product?.gallery.map((img, idx) => 
            <img
              key={idx}
              src={img}
              alt=""
              className='item-photo'
              onClick={() => this.setState({
                mainImg: img
              })} 
            />
          )}
        </div>
        <div className='item-main-photo'>
          <img src={this.state?.mainImg} alt="" />
        </div>
        <div className='item-details'>
          <div className='item-vitals'>
            <span className='item-brand'>
              {this.state?.product?.brand}
            </span>
            <span className='item-title'>
              {this.state?.product?.name}
            </span>
          </div>
          <div className='item-attributes'>
              {this.state?.product?.attributes.map((attr, idx) => 
                <div key={idx} className='item-attribute'>
                  <div className='item-attribute-heading'>
                    {attr.id}:
                  </div>
                  <div className='item-attribute-list'>
                    {attr.items.map((item, idx) => 
                      attr.type === 'text' ?
                        <div key={idx} className='item-text-attribute'>
                          {item.value}
                        </div>
                      :
                        <div className='item-color-attribute' style={{'backgroundColor': item.value}}/>
                    )}
                  </div>
                </div>
              )}
              <div className='item-price'>
                <span className='item-price-heading'>
                  Price:
                </span>
                <span className='item-price-value'>
                  12
                </span>
              </div>
              <button 
                className='add-to-cart-btn'
                onClick={() => {
                  this.props.changeCart(handleCardChange(this.props.cart, this.state?.product))
                }}
              >
                Add to cart
              </button>
              <span dangerouslySetInnerHTML={{ __html: this.state?.product?.description }} />
          </div>
        </div>
      </section>
    )
  }
}

const withParams = (Component) => {
  return props => <Component {...props} params={useParams()} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(withParams(ProductPage))