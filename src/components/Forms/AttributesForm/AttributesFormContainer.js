import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux';
import AttributeForm from './AttributeForm'
import { changeCurrency } from '../../../store/actions'

class AttributesFormContainer extends Component {
    constructor(props) {
        super(props)
        this.initialValues = {}
    }

    setInitialValues(propertyName, baseValue) {
        this.initialValues[propertyName] = baseValue
    }

    componentDidMount() {
        this.props.initialValues.map((attributeGroup) => {
            this.setInitialValues(attributeGroup.name.toLowerCase(), attributeGroup.items[0].value)
        })
        this.props.handleSubmit(this.initialValues)
    }

    render() {
        return (
            this.props.atCart ?
                <div>
                    1
                </div>
                :
                <Formik
                    enableReinitialize
                    initialValues={this.initialValues}
                    onSubmit={(form) => {
                        this.props.handleSubmit(form)
                    }}
                    >
                        {({values}) => <AttributeForm values={values} initialValues={this.props.initialValues} />}
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
