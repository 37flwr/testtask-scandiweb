import React, { Component } from 'react'
import { Field } from 'formik';
import { formatCurrency } from '../../../../utils';
import './styles.scss';

export default class DropdownFormField extends Component {
  render() {
    return (
        <div className='dropdown-input-container' >
            {this.props.label && 
                <label className="input-label" htmlFor={this.props.id}>
                    {formatCurrency(this.props.label)}
                </label>
            }
            <Field
                name={this.props.name}
                id={this.props.id}
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
