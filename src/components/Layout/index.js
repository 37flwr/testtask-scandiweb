import React, { Component } from 'react'
import Header from './Header'
import Modal from './Modal'
import './styles.scss'

export default class Layout extends Component {
  state = {
    modal: false,
  }

  componentDidMount() {
    this.setState({
      modal: true
    })
    window.scrollTo(0, 0);
    document.body.classList.add('stop-scrolling')
  }

  closeModal() {
    this.setState({
      modal: false
    })
    document.body.classList.remove('stop-scrolling')
  }

  render() {
    return (
      <section className='layout'>
        <Header />
        {this.state.modal && <Modal handleClick={this.closeModal.bind(this)}/>}
        {this.props.children}
      </section>
    )
  }
}
