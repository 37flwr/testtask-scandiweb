import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux';
import CurrencyForm from './CurrencyForm'
import { changeCurrency } from '../../../store/actions'

class CurrencyFormContainer extends Component {
    constructor(props) {
        super(props)
        this.initialValues = {
            currency: this.props.currency?.currency
        }
    }

    render() {
        return (
            <Formik
                enableReinitialize
                initialValues={this.initialValues}
                onSubmit={(form) => {
                    this.props.changeCurrency(form)
                }}
            >
                {({values}) => <CurrencyForm values={values} />}
            </Formik>
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyFormContainer)
