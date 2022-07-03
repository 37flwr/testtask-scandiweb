import React, { Component } from 'react'
import { Form } from 'formik';
import { DropdownFormField } from '../../Formik/Fields'
import IconArrow from '../../../assets/Arrow.svg'
import classNames from 'classnames';
import { formatCurrency } from '../../../utils';
import './styles.scss';

const formFields = (active) =>
  [
    {
      id: 'usd',
      name: 'currency',
      value: 'usd',
      label: 'USD',
      type: 'radio',
      active: active,
      show: true,
    },
    {
      id: 'eur',
      name: 'currency',
      value: 'eur',
      label: 'EUR',
      type: 'radio',
      active: active,
      show: true,
    },
    {
      id: 'jpy',
      name: 'currency',
      value: 'jpy',
      label: 'JPY',
      type: 'radio',
      active: active,
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
      console.log(this.props.values);
      return (
        <Form className="dropdown-form" autoComplete="off">
          <div
            className={classNames("dropdown-value", this.state?.active && "dropdown-active")}
            onClick={() => this.handleClick()}
          >
            <label className="dropdown-value-data">{formatCurrency(this.props.values?.currency, 'short')}</label>
            <img
              src={IconArrow}
              id="dropdown-arrow"
              alt={`Show ${this.state?.active ? "less" : "more"}`}
              className={classNames("arrow-dropdown", this.state?.active && "active")}
            />
          </div>
          {this.state?.active && (
            <div className="dropdown-fields-container">
              {formFields(this.props.values?.currency).map(renderDropdownFormField)}
            </div>
          )}
          <button id="form-submit" type="submit" className="dropdown-submit">
            Filter
          </button>
        </Form>
      )
    }
  }
