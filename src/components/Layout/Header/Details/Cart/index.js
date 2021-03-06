import { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Item from './Item';
import CartQnt from './CartQnt';
import CartButton from './CartButton';
import { handleCountCartItems } from '../../../../../utils';
import { handleCountCartTotal } from '../../../../../utils';
import { ReactComponent as IconCart} from '../../../../../assets/Cart.svg'

import './styles.scss'
import CartTotal from './CartTotal';

class Cart extends Component {
    constructor(props) {
        super(props)

        this.wrapperRef = createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    state = {
        active: false,
    }

    // Lifecycles
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    // Handlers
    handleElementClick() {
        this.setState({active: !this.state.active})
        document.body.classList.add('stop-scrolling')
    }

    handleCloseCart() {
        this.setState({active: false})
        document.body.classList.remove('stop-scrolling')
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({active: false})
            document.body.classList.remove('stop-scrolling')
        }
    }

    getAttributesForCheckout(attributes) {
        let output = ''
        for (const key in attributes) {
            output = output + key[0].toUpperCase() + key.slice(1) + ': ' + attributes[key] + '\n';
        }
        return output
    }

    handleCheckout() {
        let res = `You ordered:\n\n`
        this.props.cart.cart.forEach((item) => {
            res = res + item.qnt + ' ' + item.item.name + ' ' + item.item.brand + '\n' + this.getAttributesForCheckout(item.attributes) + '\n'
        })
        res = res + 'Total: ' + handleCountCartTotal(this.props.cart.cart, this.props.currency).currSymbol + handleCountCartTotal(this.props.cart.cart, this.props.currency).total
        alert(res);
    }
a
    render() {
        return (
            <>
            <div className='dropdown-cart' ref={this.wrapperRef}>
                {handleCountCartItems(this.props.cart.cart) ?
                    <>
                        <IconCart 
                            className={classNames('cart-icon', this.state?.active && 'cart-active')}
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
                        <IconCart 
                            className={classNames('cart-icon', this.state?.active && 'cart-active')}
                        />
                    </Link>
                }
                {this.state.active && (
                    <div className='dropdown-cart-content'>
                        <CartQnt />
                        <div className='dropdown-cart-item-list'>
                            {this.props.cart.cart?.map((item) =>
                                <Item
                                    key={item.item.id}
                                    item={item}
                                    handleCloseCart={this.handleCloseCart.bind(this)}
                                />
                            )}
                        </div>
                        <CartTotal
                            cart={this.props.cart.cart}
                            currency={this.props.currency}
                        />
                        <div className='cart-buttons'>
                            <CartButton
                                path='/cart'
                                text='View bag'
                                className='unfilled'
                                handleClick={this.handleCloseCart.bind(this)}
                            />
                            <CartButton
                                text='Check out'
                                className='filled'
                                handleClick={this.handleCheckout.bind(this)}
                            />
                        </div>
                    </div>
                )}
            </div>
            {this.state?.active && <div className='cart-blur' />}
        </>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.Cart,
    currency: state.Currency
});

export default connect(mapStateToProps, null)(Cart)