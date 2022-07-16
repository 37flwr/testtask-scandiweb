import React, { Component } from 'react'
import NavCard from './NavCard';
import Loader from '../../components/Loader';
import { handleCategoriesFetch } from '../../utils';

import './styles.scss'

export default class HomePage extends Component {
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
      <section id='home-page'>
        {this.state.categories ?
          <div className='home-page-grid'>
            {this.state.categories.map(({name}, idx) => 
              <NavCard key={idx} category={name} />
            )}
          </div>
        :
          <div className='loader-container'>
            <Loader />
          </div>
        }
      </section>
    )
  }
}
