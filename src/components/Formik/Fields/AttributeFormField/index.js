import React, { Component } from 'react';
import { Field } from 'formik';
import classNames from 'classnames';
import './styles.scss';

export default class AttributeFormField extends Component {
  render() {
    console.log(this.props);
    return (
      this.props.type === 'text' ?
      <label className='product-text-attribute'>
        <Field
          name={this.props.name}
          id={this.props.item.id.toLowerCase()}
          type='radio'
          value={this.props.item.value}
          className='product-radio'
        />
        <div className='attribute-text'>
            {this.props.item.value}
        </div>
      </label>
      :
      <label className='product-color-attribute' style={{'backgroundColor': this.props.item.value}}>
        <Field
          name={this.props.name}
          id={this.props.item.id.toLowerCase()}
          type='radio'
          value={this.props.item.value}
          className='product-radio'
        />
        <div className='attribute-color' />
      </label>
    )
  }
}
