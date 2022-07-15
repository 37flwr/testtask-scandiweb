import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux';
import AttributeForm from './AttributeForm'

class AttributesFormContainer extends Component {
    constructor(props) {
        super(props)
        if(this.props.initialValues) {
            this.initialValues = this.props.initialValues
        } else {
            this.initialValues = {}
            this.props.values.map((attributeGroup) => {
                this.setInitialValues(attributeGroup.name.toLowerCase(), attributeGroup.items[0].value)
            })
        }
    }

    setInitialValues(propertyName, baseValue) {
        this.initialValues[propertyName] = baseValue
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
                        {({values}) => <AttributeForm values={values} initialValues={this.props.values} itemId={this.props.itemId} />}
                </Formik>
        )
    }
}

const mapStateToProps = state => ({
    currency: state.Currency
});

export default connect(mapStateToProps, null)(AttributesFormContainer)
