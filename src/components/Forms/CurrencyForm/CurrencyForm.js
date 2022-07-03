import React, { Component, useEffect } from 'react'
import { Form } from 'formik';
import { DropdownFormField } from '../../Formik/Fields'

const formFields = () =>
  [
    {
      id: 'all',
      name: 'value',
      value: 'all',
      label: 'All',
      type: 'radio',
      show: true,
    },
    {
      id: 'tips',
      name: 'value',
      value: 'tips',
      label: 'Tips',
      type: 'radio',
      show: true,
    },
    {
      id: 'update',
      name: 'value',
      value: 'update',
      label: 'Update',
      type: 'radio',
      show: true,
    },
  ].filter(({ show }) => show);

  const renderDropdownFormField = ({ show, ...fieldProps }) => (
    <DropdownFormField key={fieldProps.value} {...fieldProps} />
  );

  export default class CurrencyForm extends Component {
    
    componentDidMount() {
      this.setState({active: false})
    }

    handleClick() {
      this.setState({active: !this.state.active})
    }

    render() {
      return (
        <>
        <Form className="dropdown-form is-column align-center" autoComplete="off">
          <div
            className={`dropdown-filter karla${this.state?.active ? ' dropdown-active': ''}`}
            onClick={() => this.handleClick()}
          >
            <div className="dropdown-filter-container">
              <span>Section:</span>
              <label className="dropdown-filter-value">{this.props.values?.currency}</label>
            </div>
            {this.state?.active ? (
              1
            ) : (
              // <img
              //   src={IconArrowDown}
              //   id="dropdown-arrow"
              //   alt=""
              //   className="arrow-dropdown"
              // />
              2
            )}
          </div>
          {this.state?.active && (
            <div className="dropdown-fields-container">
              {formFields().map(renderDropdownFormField)}
            </div>
          )}
          <button id="form-submit" type="submit" className="dropdown-submit">
            Filter
          </button>
        </Form>
      </>
    )
  }
}
