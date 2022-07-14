import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux';
import AttributeForm from './AttributeForm'
import { changeCurrency } from '../../../store/actions'

class AttributesFormContainer extends Component {
    constructor(props) {
        super(props)
        if(this.props.initialValues) {
            this.initialValues = this.props.initialValues
        } else {
            this.initialValues = {}
        }
    }

    setInitialValues(propertyName, baseValue) {
        this.initialValues[propertyName] = baseValue
    }

    componentDidMount() {
        // if(Array.isArray(this.props.initialValues)) {
        //     this.props.initialValues.map((attributeGroup) => {
        //         this.setInitialValues(attributeGroup.name.toLowerCase(), attributeGroup.items[0].value)
        //     })
        // } else {
        //     for (const key in this.props.initialValues) {
        //         this.setInitialValues(key, this.props.initialValues[key])
        //     }
        // }
        // this.props.handleSubmit(this.initialValues)


    }

    render() {
        console.log(this.props.initialValues);
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
                        {({values}) => <AttributeForm values={values} initialValues={this.props.values} />}
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
