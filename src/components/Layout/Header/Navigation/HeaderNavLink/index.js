import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { capitalizeFirstLetter } from '../../../../../utils'
import './styles.scss'

export default class HeaderNavLink extends Component {
  render() {
    return (
      <NavLink
        to={`/:${this.props.name}`}
        className={({isActive}) => classNames("nav-link", isActive && 'selected')}
      >
        {capitalizeFirstLetter(this.props.name)}
      </NavLink>
    )
  }
}
