import React, { Component } from 'react'
import { Form } from 'formik';
import { DropdownFormField } from '../../Formik/Fields'
import IconArrow from '../../../assets/Arrow.svg'
import classNames from 'classnames';
import { formatCurrency } from '../../../utils';
import './styles.scss';

const formFields = () =>
  [
    {
      id: 'usd',
      name: 'currency',
      value: 'usd',
      label: 'USD',
      type: 'radio',
      show: true,
    },
    {
      id: 'eur',
      name: 'currency',
      value: 'eur',
      label: 'EUR',
      type: 'radio',
      show: true,
    },
    {
      id: 'jpy',
      name: 'currency',
      value: 'jpy',
      label: 'JPY',
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
              <label className="dropdown-filter-value">{formatCurrency(this.props.values?.currency)}</label>
              <img
                src={IconArrow}
                id="dropdown-arrow"
                alt={`Show ${this.state?.active ? "less" : "more"}`}
                className={classNames("arrow-dropdown", this.state?.active && "active")}
              />
            </div>
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
