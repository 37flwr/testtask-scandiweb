import React, { Component } from 'react'
import ApolloClient, { gql } from 'apollo-boost'
import HeaderNavLink from './HeaderNavLink'
import './styles.scss'

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

export default class Navigation extends Component {
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
        <div className='navigation'>
            {this.state?.categories?.map(({ name }, idx) => 
              <HeaderNavLink name={name} key={idx} />
            )}
        </div>
    )
  }
}
