import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import './styles.scss'

export default class HeaderNavLink extends Component {
  render() {
    return (
      <NavLink
        to={this.props.path}
        className={({isActive}) => classNames("nav-link", isActive && 'selected')}
      >
        {this.props.text}
      </NavLink>
    )
  }
}
