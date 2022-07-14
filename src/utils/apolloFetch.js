import ApolloClient, { gql } from "apollo-boost"

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

const handleCategoryFetch = async (value) => {
    const response = await client
        .query({
            query: gql`
                {
                  category(input: {title: "${value}"}) {
                    name
                    products {
                    id
                    name
                    inStock
                    gallery
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
                }
            `
        })
    return response.data.category.products
}

const handleProductFetch = async (value) => {
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
    return response.data.product
  }

  export { handleCategoryFetch, handleProductFetch }