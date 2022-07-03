import React, { Component, useEffect } from 'react'
import { Form } from 'formik';
import { DropdownFormField } from '../../Formik/Fields'
import IconArrow from '../../../assets/Arrow.svg'
import classNames from 'classnames';

const formFields = () =>
  [
    {
      id: 'all',
      name: 'currency',
      value: 'all',
      label: 'All',
      type: 'radio',
      show: true,
    },
    {
      id: 'tips',
      name: 'currency',
      value: 'tips',
      label: 'Tips',
      type: 'radio',
      show: true,
    },
    {
      id: 'update',
      name: 'currency',
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
        <Form className="dropdown-form" autoComplete="off">
          <div
            className={classNames("dropdown-filter", this.state?.active && "dropdown-active")}
            onClick={() => this.handleClick()}
          >
            <div className="dropdown-filter-container">
              <span>Section:</span>
              <label className="dropdown-filter-value">{this.props.values?.currency}</label>
            </div>
            <img
              src={IconArrow}
              id="dropdown-arrow"
              alt={`Show ${this.state?.active ? "less" : "more"}`}
              className={classNames("arrow-dropdown", this.state?.active && "active")}
            />
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
      )
    }
  }
