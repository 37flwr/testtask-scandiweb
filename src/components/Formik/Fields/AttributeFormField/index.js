import React, { Component } from 'react';
import { Field } from 'formik';
import classNames from 'classnames';
import './styles.scss';

export default class AttributeFormField extends Component {
  render() {
    return (
      <label className='attribute-cont'>

        <Field
          name={this.props.name}
          id={this.props.item.id.toLowerCase()}
          type='radio'
          value={this.props.item.value}
          className='product-radio'
        />
        <span className='asd'>
            {this.props.item.value}
        </span>
      </label>
    )
  }
}
