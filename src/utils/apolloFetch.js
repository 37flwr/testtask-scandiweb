import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

const handleCategoryFetch = async (categoryName) => {
  const response = await client
    .query({
        query: gql`
          {
            category(input: {title: "${categoryName}"}) {
              name
              products {
              id
              name
              inStock
              gallery
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
          }
        `
    })
  return response.data.category.products
}

const handleProductFetch = async (productId) => {
  const response = await client
    .query({
      query: gql`
        {
          product(id: "${productId}") {
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

const handleCurrenciesFetch = async () => {
  const response = await client
    .query({
      query: gql`
        {
          currencies {
            label
            symbol
          }
        }
      `
    })

  return response.data.currencies
}

export { handleCategoryFetch, handleProductFetch, handleCurrenciesFetch }
