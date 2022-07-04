import React, { Component } from 'react'
import { Form } from 'formik';
import { DropdownFormField } from '../../Formik/Fields'
import IconArrow from '../../../assets/Arrow.svg'
import ApolloClient from 'apollo-boost';
import classNames from 'classnames';
import { formatCurrency } from '../../../utils';
import { gql } from 'apollo-boost';
import { connect } from 'react-redux';
import './styles.scss';

const renderDropdownFormField = ({ show, ...fieldProps }) => (
  <DropdownFormField key={fieldProps.value} {...fieldProps} />
);

const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

class CurrencyForm extends Component {
  constructor(props) {
    super(props)

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  // lifecycles
  componentDidMount() {
    this.setState({
      active: false,
      currencies: null,
      activeCurrency: this.props.values.currency
    })
    document.addEventListener("mousedown", this.handleClickOutside);
    this.handleCurrenciesFetch()
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.values?.currency !== this.props.values?.currency) {
      this.handleValuesUpdate();
    }
  }

  // handlers
  async handleCurrenciesFetch() {
    const response = await client
        .query({
            query: gql`
                {
                    currencies {
                        label
                        symbol
                    }
                }
            `
        })
    response.data.currencies.map(item => {
      item.name = 'currency'
      item.show = true
      item.value = item.label.toLowerCase()
      item.type = 'radio'
    })
    this.setState({
        currencies: response.data.currencies
    })
  }

  handleValuesUpdate() {
    document.getElementById('form-submit').click()
    this.setState({active: false})
  }

  handleElementClick() {
    this.setState({active: !this.state.active})
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({active: false})
    }
  }

  render() {
    return (
      <Form className="dropdown-form" autoComplete="off" ref={this.wrapperRef}>
        <div
          className={classNames("dropdown-value", this.state?.active && "dropdown-active")}
          onClick={() => this.handleElementClick()}
        >
          <label className="dropdown-value-data">{formatCurrency(this.props.currency?.currency, 'short')}</label>
          <img
            src={IconArrow}
            id="dropdown-arrow"
            alt={`Show ${this.state?.active ? "less" : "more"}`}
            className={classNames("dropdown-arrow", this.state?.active && "active")}
          />
        </div>
        {this.state?.active && (
          <div className="dropdown-fields-container">
            {this.state.currencies.map(renderDropdownFormField)}
          </div>
        )}
        <button id="form-submit" type="submit" className="dropdown-submit">
          Filter
        </button>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
    currency: state.Currency
});

export default connect(mapStateToProps, null)(CurrencyForm)
