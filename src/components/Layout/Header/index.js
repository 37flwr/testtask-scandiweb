import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import Details from './Details'
import IconWebsiteLogo from '../../../assets/WebsiteLogo.svg'

import './styles.scss'

export default class Header extends Component {
  render() {
    return (
      <section id='header'>
        <Navigation />
        <Link to='/' className='logo-container'>
          <img src={IconWebsiteLogo} alt='Back to the home page' className='logo'/>
        </Link>
        <Details />
      </section>
    )
  }
}
