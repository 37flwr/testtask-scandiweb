import React, { Component } from 'react'
import { Field } from 'formik';

export default class DropdownFormField extends Component {
  render() {
      console.log(this.props);
    return (
        <div className='dropdown-input-container' >
            {this.props.label && <label className="input-label" htmlFor={this.props.id}>{this.props.label}</label>}
            <Field
                name={this.props.name}
                id={this.props.id}
                {...(this.props.component && this.props.component )}
                {...(this.props.type && this.props.type )}
                {...this.props.restProps}
                className='dropdown-input-field'
            />
            {this.props.legend && <span className='dropdown-input-legend'>{this.props.legend}</span>}
        </div>
    )
  }
}
