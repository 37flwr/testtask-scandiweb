import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
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
        console.log(this.props.cart);
        return (
            <div className='cart' ref={this.wrapperRef}>
                <img 
                    src={IconCart} 
                    alt=""
                    className={classNames("cart-icon", this.state?.active && "cart-active")}
                    onClick={() => this.handleElementClick()}
                />
                {this.state?.active && (
                    <div className="dropdown-cart-container">
                        {this.props.cart.cart.map((item) => 
                            <div>{item.item.id}</div>
                        )}
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