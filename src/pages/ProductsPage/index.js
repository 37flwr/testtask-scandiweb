import React, { Component } from 'react'
import { useParams } from 'react-router';
import ApolloClient, { gql } from 'apollo-boost'
import { capitalizeFirstLetter } from '../../utils';
import ProductCard from './components/ProductCard';
import './styles.scss'

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

class ProductPage extends Component {
    async handleCategoryFetch(value) {
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
                }
            `
        })
        this.setState({
            products: response.data.category.products
        })
    }

    async componentDidMount() {
        this.setState({
            type: this.props.params.category.slice(1)
        })
        await this.handleCategoryFetch(this.props.params.category.slice(1))
    }

    async componentDidUpdate(prevState) {
        if(prevState.params.category !== this.props.params.category) {
            this.setState({
                type: this.props.params.category.slice(1)
            })
            await this.handleCategoryFetch(this.props.params.category.slice(1))
        }
    }

    render() {
        console.log(this.state?.products);
        return (
            <section>
                <h1>
                    {this.state?.type && capitalizeFirstLetter(this.state.type)}
                </h1>
                <div className='products-grid'>
                {this.state?.products?.map((product) => 
                    <ProductCard
                    img={product.gallery[0]}
                    title={product.name}
                    prices={product.prices}
                    />
                    )}
                </div>
            </section>
        )
    }
}

export default withParams(ProductPage)
