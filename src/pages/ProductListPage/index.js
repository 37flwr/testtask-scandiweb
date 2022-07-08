import React, { Component } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';

import ProductCard from './ProductCard';
import Loader from '../../components/Loader'

import { capitalizeFirstLetter } from '../../utils';
import { handleCategoryFetch } from '../../utils';

import './styles.scss'

class ProductListPage extends Component {
    async componentDidMount() {
        const products = await handleCategoryFetch(this.props.params.category.slice(1))
        this.setState({
            type: this.props.params.category.slice(1),
            productsArray: products,
        })
    }

    async componentDidUpdate(prevState) {
        if(prevState.params.category !== this.props.params.category) {
            const products = await handleCategoryFetch(this.props.params.category.slice(1))
            this.setState({
                type: this.props.params.category.slice(1),
                productsArray: products,
            })
        }
    }

    render() {
        return (
            <section className='product-page'>
                {this.state ?
                    <>
                        <div className='product-page-heading'>
                            {this.state.type && capitalizeFirstLetter(this.state.type)}
                        </div>
                        <div className='products-grid'>
                            {this.state.productsArray?.map((product, idx) => 
                                <ProductCard
                                    item={product}
                                    id={product.id}
                                    img={product.gallery[0]}
                                    title={product.name}
                                    prices={product.prices}
                                    inStock={product.inStock}
                                    currency={this.props.currency}
                                    key={idx}
                                />
                            )}
                        </div>
                    </>
                :
                    <div className='loader-container'>
                        <Loader />
                    </div>
                }
            </section>
        )
    }
}

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

const mapStateToProps = state => ({
    currency: state.Currency.currency
});

export default withParams(connect(mapStateToProps, null)(ProductListPage))
