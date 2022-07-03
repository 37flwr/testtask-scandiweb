import React, { Component } from 'react'
import Navigation from './components/Navigation'
import IconALogo from '../../../assets/ALogo.svg'
import './styles.scss'

export default class Header extends Component {
  render() {
    return (
      <section id='header'>
        <Navigation />
        <img src={IconALogo} alt='Back to the home page' className='logo'/>
      </section>
    )
  }
}
