import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './styles.scss';

export default class CartButton extends Component {
  render() {
    return (
      this.props.path ?
        <Link
          to={this.props.path}
          className={classNames('cart-button', this.props.className)}
          onClick={() => this.props.handleClick()}
        >
          {this.props.text}
        </Link>
      :
        <button
          className={classNames('cart-button', this.props.className)}
          onClick={() => this.props.handleClick()}
        >
          {this.props.text}
        </button>
    )
  }
}
