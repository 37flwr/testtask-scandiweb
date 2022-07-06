import React, { Component } from 'react'
import { useParams } from 'react-router';
import ApolloClient, { gql } from 'apollo-boost'
import './styles.scss'

const withParams = (Component) => {
  return props => <Component {...props} params={useParams()} />;
}

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

class ItemPage extends Component {
  async handleCategoryFetch(value) {
        const response = await client
        .query({
          query: gql`
            {
              product(id: "${value}") {
              id
              name
              inStock
              gallery
              description
              category
              attributes {
                id
                name
                type
                items {
                  displayValue
                  value
                  id
                }
              }
              prices {
                currency {
                  label
                  symbol
                }
                amount
              }
              brand
              }
            }
          `
        })
        this.setState({
            product: response.data.product
        })
    }

  async componentDidMount() {
    this.setState({
      type: this.props.params.id.slice(1)
    })
    await this.handleCategoryFetch(this.props.params.id.slice(1))
  }

  async componentDidUpdate(prevState) {
    if(prevState.params.id !== this.props.params.id) {
      this.setState({
        type: this.props.params.id.slice(1)
      })
      await this.handleCategoryFetch(this.props.params.id.slice(1))
    }
  }
  
  render() {
    console.log(this.state?.product);
    return (
      <div>{this.state?.product?.id}</div>
    )
  }
}

export default withParams(ItemPage)