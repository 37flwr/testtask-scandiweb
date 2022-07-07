import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { handleAddToCart, handleRemoveFromCart, handleCountCartItems } from '../../../../../../utils/cartActions';
import { changeCart } from '../../../../../../store/actions';
import IconCart from '../../../../../../assets/Cart.svg'
import './styles.scss'

class Cart extends Component {
    constructor(props) {
        super(props)

        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        this.setState({
            active: false,
        })
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleElementClick() {
        this.setState({active: !this.state.active})
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({active: false})
        }
    }

    render() {
        console.log(this.props.cart.cart);
        return (
            <div className='cart' ref={this.wrapperRef}>
                {handleCountCartItems(this.props.cart.cart) ?
                    <>
                        <img 
                            src={IconCart} 
                            alt=""
                            className={classNames("cart-icon", this.state?.active && "cart-active")}
                            onClick={() => {
                                this.handleElementClick()
                            }}
                        />
                        <div className='cart-qnt' onClick={() => this.handleElementClick()}>
                            {handleCountCartItems(this.props.cart.cart)}
                        </div>
                    </>
                :
                    <Link to={'/cart'}>
                        <img 
                            src={IconCart} 
                            alt=""
                            className="cart-icon"
                        />
                    </Link>
                }
                {this.state?.active && (
                    <div className="dropdown-cart-container">
                        <div className='dropdown-cart-qnt'>
                            <span>
                                <b>My Bag,</b>
                            </span>
                            <span>
                                {handleCountCartItems(this.props.cart.cart)} {handleCountCartItems(this.props.cart.cart) > 1 ? 'items' : 'item'}
                            </span>
                        </div>
                        <div className='dropdown-cart-list'>
                            {this.props.cart.cart?.map((item) =>
                                <div className='dropdown-cart-item'>
                                    <div className='cart-item-details'>
                                        <div className='cart-item-vitals'>
                                            <span>
                                                {item.item.brand}
                                            </span>
                                            <span>
                                                {item.item.name}
                                            </span>
                                        </div>
                                        <span className='cart-item-price'>
                                            12
                                        </span>
                                        <div className='cart-item-attr-container'>
                                            {item.item?.attributes?.map((attr) => 
                                                <div className='cart-item-attr-content'>
                                                    <span>
                                                        {attr.name}:
                                                    </span>
                                                    {attr.type === 'text' ?
                                                        <div className='cart-item-attr-list'>
                                                            {attr.items.map((item) => 
                                                                <div className='cart-item-attr-text'>
                                                                    {item.value}
                                                                </div>
                                                            )}
                                                        </div>
                                                    :
                                                        <div className='cart-item-attr-list-color'>
                                                            {attr.items.map((item) => 
                                                                <div className='cart-item-attr-color' style={{'backgroundColor': item.value}}/>
                                                            )}
                                                        </div>
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='cart-item-qnt'>
                                        <div className='cart-item-qnt-handler' onClick={() => this.props.changeCart(handleAddToCart(this.props.cart, item.item))}>
                                            +
                                        </div>
                                        <span>
                                            {item.qnt}
                                        </span>
                                        <div className='cart-item-qnt-handler' onClick={() => this.props.changeCart(handleRemoveFromCart(this.props.cart, item.item))}>
                                            -
                                        </div>
                                    </div>
                                    <img
                                        src={item.item.gallery[0]}
                                        alt=""
                                        className='cart-item-photo'
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart)