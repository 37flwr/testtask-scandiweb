import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../../utils'

import './styles.scss'

export default class NavCard extends Component {
  render() {
    return (
        <Link
            className='home-page-nav-card'
            to={`/:${this.props.category}`}
        >
          {capitalizeFirstLetter(this.props.category)}
        </Link>
    )
  }
}
