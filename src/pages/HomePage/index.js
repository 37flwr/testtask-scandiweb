import React, { Component } from 'react'
import ApolloClient, { gql } from 'apollo-boost'

import NavCard from './components/NavCard';
import Loader from '../../components/Loader';

import './styles.scss'

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

export default class HomePage extends Component {
  componentDidMount() {
    this.handleCategoriesFetch()
  }

  render() {
    return (
      <section id='home-page'>
        {this.state?.categories ?
          <div className='home-page-grid'>
            {this.state?.categories.map(({name}, idx) => 
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
