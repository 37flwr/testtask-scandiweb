import React, { Component } from 'react'
import ApolloClient, { gql } from 'apollo-boost'
import NavCard from './components/NavCard';
import './styles.scss'

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

export default class HomePage extends Component {
  componentDidMount() {
    this.handleCategoriesFetch()
  }
  
  async handleCategoriesFetch() {
    const response = await client
        .query({
            query: gql`
                {
                    categories {
                        name
                    }
                }
            `
        })
    this.setState({
        categories: response.data.categories
    })
  }

  render() {
    return (
      <section id='main-page'>
        {this.state?.categories?.map(
          ({name}, idx) => <NavCard key={idx} category={name} />
        )}
      </section>
    )
  }
}
