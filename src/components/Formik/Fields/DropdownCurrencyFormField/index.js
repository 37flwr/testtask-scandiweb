import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field } from 'formik';
import classNames from 'classnames';

import './styles.scss';

class DropdownCurrencyFormField extends Component {
    render() {
        return (
            <div className={classNames(
                'dropdown-currency-input-container', 
                this.props.currency.currency === this.props.label.toLowerCase() && 'active-currency-input'
            )}>
                {this.props.label && 
                    <label className="dropdown-currency-input-label" htmlFor={this.props.label.toLowerCase()}>
                        {this.props.symbol} {this.props.label}
                    </label>
                }
                <Field
                    name='currency'
                    type='radio'
                    value={this.props.label.toLowerCase()}
                    id={this.props.label.toLowerCase()}
                    className='dropdown-currency-input-field'
                    component={this.props.component}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currency: state.Currency
});

export default connect(mapStateToProps, null)(DropdownCurrencyFormField)