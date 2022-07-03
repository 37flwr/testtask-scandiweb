import React, { Component } from 'react'
import { Formik } from 'formik'
import CurrencyForm from './CurrencyForm'

export default class CurrencyFormContainer extends Component {
    constructor(props) {
        super(props)
        this.initialValues = {
            currency: 'usd',
        }
    }
    
    render() {
        return (
        <Formik
            enableReinitialize
            initialValues={this.initialValues}
            onSubmit={(form) => {
                console.log(form);
            }}
        >
            {({values}) => <CurrencyForm values={values} />}
        </Formik>
        )
    }
}
