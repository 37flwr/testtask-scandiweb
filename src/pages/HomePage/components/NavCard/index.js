import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../../../utils'
import './styles.scss'

export default class NavCard extends Component {
  render() {
    return (
        <Link
            className='nav-card'
            to={`/:${this.props.category}`}
        >
            <span className='nav-card-text'>
                {capitalizeFirstLetter(this.props.category)}
            </span>
        </Link>
    )
  }
}
