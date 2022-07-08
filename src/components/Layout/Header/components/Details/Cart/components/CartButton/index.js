import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './styles.scss';

export default class CartButton extends Component {
  render() {
    return (
        <Link
            to={this.props.path}
            className={classNames('cart-button', this.props.className)}
        >
            {this.props.text}
        </Link>
    )
  }
}
