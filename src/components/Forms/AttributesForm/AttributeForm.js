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
      <Form className="product-attribute-list" autoComplete="off">
        {this.props.values.map((attributeGroup) => 
          <>
            <h1>{attributeGroup.name}:</h1>
            {attributeGroup.items.map((item) => renderAttributeFormField(item, attributeGroup.name.toLowerCase(), attributeGroup.type))}
          </>
        )}
        <button id="form-submit" type="submit" className='attribute-form-btn'>
          Add to cart
        </button>
      </Form>
    )
  }
}

export default AttributeForm
