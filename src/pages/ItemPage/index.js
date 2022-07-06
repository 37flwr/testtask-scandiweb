import React, { Component } from 'react'
import { useParams } from 'react-router';
import ApolloClient, { gql } from 'apollo-boost'
import './styles.scss'
import classNames from 'classnames';

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
            product: response.data.product,
            mainImg: response.data.product.gallery[0]
        })
    }

  async componentDidMount() {
    this.setState({
      type: this.props.params.id.slice(1),
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
      <section className='item-page'>
        <div className='item-photos-gallery'>
          {this.state?.product?.gallery.map((img) => 
            <img 
              src={img}
              alt=""
              className='item-photo'
              onClick={() => this.setState({
                mainImg: img
              })} 
            />
          )}
        </div>
        <div className='item-main-photo'>
          <img src={this.state?.mainImg} alt="" />
        </div>
        <div className='item-details'>
          <div className='item-vitals'>
            <span className='item-brand'>
              {this.state?.product?.brand}
            </span>
            <span className='item-title'>
              {this.state?.product?.name}
            </span>
          </div>
          <div className='item-attributes'>
              {this.state?.product?.attributes.map((attr) => 
                <div className='item-attribute'>
                  <div className='item-attribute-heading'>
                    {attr.id}:
                  </div>
                  <div className='item-attribute-list'>
                    {attr.items.map((item) => 
                      attr.type === 'text' ?
                        <div className='item-text-attribute'>
                          {item.value}
                        </div>
                      :
                        <div className='item-color-attribute' style={{'backgroundColor': item.value}}/>
                    )}
                  </div>
                </div>
              )}
              <div className='item-price'>
                <span className='item-price-heading'>
                  Price:
                </span>
                <span className='item-price-value'>
                  12
                </span>
              </div>
              <button className='add-to-cart-btn'>
                Add to cart
              </button>
              <span dangerouslySetInnerHTML={{ __html: this.state?.product?.description }} />
          </div>
        </div>
      </section>
    )
  }
}

export default withParams(ItemPage)