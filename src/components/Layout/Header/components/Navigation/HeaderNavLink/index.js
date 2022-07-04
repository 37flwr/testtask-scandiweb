import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import './styles.scss'

export default class HeaderNavLink extends Component {
  render() {
    return (
      <NavLink
        to={`/${this.props.name}`}
        className={({isActive}) => classNames("nav-link", isActive && 'selected')}
      >
        {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
      </NavLink>
    )
  }
}
