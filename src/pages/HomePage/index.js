import React, { Component } from 'react'
import ApolloClient, { gql } from 'apollo-boost'
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
      <section>
        <h1>
          Category name
        </h1>
      </section>
    )
  }
}
