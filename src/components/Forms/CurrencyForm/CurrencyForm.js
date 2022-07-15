import { Component, createRef } from 'react'
import { connect } from 'react-redux';
import { Form } from 'formik';
import classNames from 'classnames';
import { DropdownCurrencyFormField } from '../../Formik/Fields'
import { handleCurrenciesFetch } from '../../../utils';
import IconArrow from '../../../assets/Arrow.svg'

import './styles.scss';

const renderDropdownCurrencyFormField = ({ ...fieldProps }, idx) => (
  <DropdownCurrencyFormField key={idx} {...fieldProps} />
);

class CurrencyForm extends Component {
  constructor(props) {
    super(props)

    this.wrapperRef = createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  state = {
    active: false,
    currencies: null
  }

  // Lifecycles
  async componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.setState({
      currencies: await handleCurrenciesFetch()
    })
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.values?.currency !== this.props.values?.currency) {
      this.handleValuesUpdate();
    }
  }

  // Handlers
  handleValuesUpdate() {
    document.getElementById('dropdown-currency-form-submit').click()
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

  renderFormLabel(currency) {
    const currencyData = this.state.currencies.filter(item => item.label.toLowerCase() === currency)[0]
    if(currencyData) {
      return currencyData.symbol
    }
    return 'UNDF' 
  }

  render() {
    return (
      <Form className="dropdown-currency-form" autoComplete="off" ref={this.wrapperRef}>
        <div
          className="dropdown-currency-form-value"
          onClick={() => this.handleElementClick()}
        >
          <label>
            {this.state.currencies && this.renderFormLabel(this.props.values.currency)}
          </label>
          <img
            src={IconArrow}
            alt={`Show ${this.state.active ? "less" : "more"}`}
            className={classNames("arrow-icon", this.state.active && "active")}
          />
        </div>
        {this.state.active && (
          <div className="dropdown-currency-form-container">
            {this.state.currencies?.map(renderDropdownCurrencyFormField)}
          </div>
        )}
        <button id="dropdown-currency-form-submit" type="submit" />
      </Form>
    )
  }
}

const mapStateToProps = state => ({
    currency: state.Currency
});

export default connect(mapStateToProps, null)(CurrencyForm)
