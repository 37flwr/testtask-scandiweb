import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {  handleCountCartItems } from '../../../../../../utils/cartActions';
import Item from './components/Item';
import CartQnt from './components/CartQnt';
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

    handleCountCartTotal(cart) {
        let currencyLabel = 0;
        let total = 0;

        const handleCurrentCurrency = (item) => {
            let amount = 0;
            
            item.item.prices.map((curr) => {
                if (curr.currency.label.toLowerCase() === this.props.currency.currency) {
                    amount = curr.amount
                }
            })
            console.log(amount);

            return amount
        }

        cart.map((item) => {
            total = total + item.qnt * handleCurrentCurrency(item)
        })
        return total
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
                        <CartQnt />
                        <div className='dropdown-cart-list'>
                            {this.props.cart.cart?.map((item) =>
                                <Item item={item}/>
                            )}
                        </div>
                        <div className='cart-total'>
                            <span>Total</span>

                            <span>
                                {this.handleCountCartTotal(this.props.cart.cart)}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.Cart,
    currency: state.Currency
});

export default connect(mapStateToProps, null)(Cart)