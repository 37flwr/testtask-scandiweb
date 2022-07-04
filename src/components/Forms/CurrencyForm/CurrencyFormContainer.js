import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux';
import CurrencyForm from './CurrencyForm'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { changeCurrency } from '../../../store/actions'

const getCurrenciesQuery = gql`
    {
        currencies {
            label
        }
    }
`

const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

class CurrencyFormContainer extends Component {
    constructor(props) {
        super(props)
        this.initialValues = {
            currency: this.props.currency?.currency,
        }
    }

    async getCurrencies() {
        const fetchCurrencies = await client
            .query({
                query: gql`
                    {
                        currencies {
                            label
                        }
                    }
                `
            })
        console.log(fetchCurrencies.data.currencies[0].label);
        this.setState({
            currencies: fetchCurrencies.data.currencies
        })
    }

    componentDidMount() {
        this.setState({
            currencies: null
        })
        this.getCurrencies()
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <Formik
                    enableReinitialize
                    initialValues={this.initialValues}
                    onSubmit={(form) => {
                        this.props.changeCurrency(form)
                    }}
                    >
                    {({values}) => <CurrencyForm values={values} />}
                </Formik>
                {this.state?.currencies?.map((curr) => 
                    curr.label
                )}
            </ApolloProvider>
        )
    }
}

const mapStateToProps = state => ({
    currency: state.Currency
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrency: (payload) => dispatch(changeCurrency(payload))
    }
};

export default graphql(getCurrenciesQuery)(connect(mapStateToProps, mapDispatchToProps)(CurrencyFormContainer))
