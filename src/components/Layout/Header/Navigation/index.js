import { Component } from 'react'
import HeaderNavLink from './HeaderNavLink'
import { handleCategoriesFetch } from '../../../../utils'

import './styles.scss'

export default class Navigation extends Component {
  state = {
    categories: null
  }
  
  async componentDidMount() {
    this.setState({
      categories: await handleCategoriesFetch()
    })
  }

  render() {
    return (
      <div className='navigation'>
        {this.state.categories?.map(({ name }, idx) => 
          <HeaderNavLink name={name} key={idx} />
        )}
      </div>
    )
  }
}
