import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Item from './components/Item';
import CartQnt from './components/CartQnt';
import IconCart from '../../../../../../assets/Cart.svg'
import CartButton from './components/CartButton';

import {  handleCountCartItems, handleCountCartTotal } from '../../../../../../utils/cartActions';

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
        return (
            <>
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
                        <CartQnt />
                        <div className='dropdown-cart-list'>
                            {this.props.cart.cart?.map((item) =>
                                <Item item={item}/>
                            )}
                        </div>
                        <div className='cart-total'>
                            <span><b>Total</b></span>
                            <span>
                                <b>{handleCountCartTotal(this.props.cart.cart, this.props.currency).currSymbol}{handleCountCartTotal(this.props.cart.cart, this.props.currency).total}</b>
                            </span>
                        </div>
                        <div className='cart-buttons'>
                            <CartButton 
                                path='/cart'
                                text='View bag'
                                className='unfilled'
                            />
                            <CartButton 
                                path='/checkout'
                                text='Check out'
                                className='filled'
                            />
                        </div>
                    </div>
                )}
            </div>
            {this.state?.active && <div className='cart-blur' style={{'height': document.body.clientHeight - 80}} />}
        </>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.Cart,
    currency: state.Currency
});

export default connect(mapStateToProps, null)(Cart)