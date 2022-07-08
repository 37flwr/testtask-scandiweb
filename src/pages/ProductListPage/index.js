import React, { Component } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';

import ProductCard from './components/ProductCard';

import { capitalizeFirstLetter } from '../../utils';
import { handleCategoryFetch } from '../../utils';

import './styles.scss'

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class ProductListPage extends Component {
    async componentDidMount() {
        const products = await handleCategoryFetch(this.props.params.category.slice(1))
        this.setState({
            type: this.props.params.category.slice(1),
            products: products,
        })
    }

    async componentDidUpdate(prevState) {
        if(prevState.params.category !== this.props.params.category) {
            const products = await handleCategoryFetch(this.props.params.category.slice(1))
            this.setState({
                type: this.props.params.category.slice(1),
                products: products,
            })
        }
    }

    render() {
        return (
            <section className='product-page'>
                <div className='product-page-heading'>
                    {this.state?.type && capitalizeFirstLetter(this.state.type)}
                </div>
                <div className='products-grid'>
                    {this.state?.products?.map((product) => 
                        <ProductCard
                            item={product}
                            id={product.id}
                            img={product.gallery[0]}
                            title={product.name}
                            prices={product.prices}
                            inStock={product.inStock}
                            currency={this.props.currency}
                        />
                    )}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    currency: state.Currency.currency
});

export default connect(mapStateToProps, null)(withParams(ProductListPage))
