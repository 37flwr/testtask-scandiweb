import React, { Component } from 'react'
import classNames from 'classnames';
import IconCart from '../../../../../../assets/Cart.svg'
import './styles.scss'

export default class Cart extends Component {
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
            <div className='cart'>
                <img 
                    src={IconCart} 
                    alt=""
                    className={classNames("cart-icon", this.state?.active && "cart-active")}
                    onClick={() => this.handleElementClick()}
                />
                {this.state?.active && (
                    <div className="dropdown-cart-container">
                        1
                    </div>
                )}
            </div>
        )
    }
}
