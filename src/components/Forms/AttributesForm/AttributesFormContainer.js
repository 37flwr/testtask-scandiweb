import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux';
import AttributeForm from './AttributeForm'
import { changeCurrency } from '../../../store/actions'

class AttributesFormContainer extends Component {
    constructor(props) {
        super(props)
        console.log();
        this.initialValues = {}
    }

    setInitialValues(propertyName, baseValue) {
        this.initialValues[propertyName] = baseValue
    }

    componentDidMount() {
        this.setInitialValues(this.props.initialValues.name.toLowerCase(), this.props.initialValues.items[0].value)
    }

    render() {
        console.log(this.props.initialValues);
        return (
            <Formik
                enableReinitialize
                initialValues={this.initialValues}
                onSubmit={(form) => {
                    console.log(form);
                }}
                >
                    <AttributeForm values={this.props.initialValues} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AttributesFormContainer)
