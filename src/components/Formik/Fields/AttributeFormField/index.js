import React, { Component } from 'react';
import { Field } from 'formik';
import './styles.scss';

export default class AttributeFormField extends Component {
  render() {
    return (
      <div>
            {this.props.name && 
                <label className="input-label" htmlFor={this.props.item.id}>
                    {this.props.name}
                </label>
            }
            <Field
                name={this.props.name}
                id={this.props.item.id}
                type={'radio'}
                value={this.props.item.value}
            />
        </div>
    )
  }
}
