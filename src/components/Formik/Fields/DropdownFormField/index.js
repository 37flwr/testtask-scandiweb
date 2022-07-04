import React, { Component } from 'react'
import { Field } from 'formik';
import { connect } from 'react-redux';
import './styles.scss';
import classNames from 'classnames';

class DropdownFormField extends Component {
  render() {
    return (
        <div className={classNames('dropdown-input-container', this.props.currency.currency === this.props.value && 'active')} >
            {this.props.label && 
                <label className="input-label" htmlFor={this.props.value}>
                    {this.props.symbol} {this.props.label}
                </label>
            }
            <Field
                name={this.props.name}
                id={this.props.value}
                component={this.props.component}
                type={this.props.type}
                value={this.props.value}
                className='dropdown-input-field'
            />
            {this.props.legend && <span className='dropdown-input-legend'>{this.props.legend}</span>}
        </div>
    )
  }
}

const mapStateToProps = state => ({
    currency: state.Currency
});

export default connect(mapStateToProps, null)(DropdownFormField)