import React, { Component } from 'react'
import HeaderNavLink from './HeaderNavLink'
import { navList } from './navList'
import './styles.scss'

export default class Navigation extends Component {
  render() {
    return (
        <div className='navigation'>
            {navList.map(({path, text}) => 
                <HeaderNavLink path={path} text={text} />
            )}
        </div>
    )
  }
}
