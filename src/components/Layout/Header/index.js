import React, { Component } from 'react'
import Navigation from './components/Navigation'
import './styles.scss'

export default class Header extends Component {
  render() {
    return (
      <section id='header'>
        <Navigation />
      </section>
    )
  }
}
