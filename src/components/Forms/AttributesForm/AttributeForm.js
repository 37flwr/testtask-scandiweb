import React, { Component } from 'react'
import { Form } from 'formik';

import { AttributeFormField } from '../../Formik/Fields'

import './styles.scss';

const renderAttributeFormField = (item, name, type, idx) => (
  <AttributeFormField key={idx} item={item} type={type} name={name} />
);

class AttributeForm extends Component {
  render() {
    return (
      <Form className="product-attribute-list" autoComplete="off" ref={this.wrapperRef}>
        {this.props.values.items.map((item) => renderAttributeFormField(item, this.props.values.name.toLowerCase(), this.props.values.type))}
        <button id="form-submit" type="submit" className='attribute-form-btn' />
      </Form>
    )
  }
}

export default AttributeForm
