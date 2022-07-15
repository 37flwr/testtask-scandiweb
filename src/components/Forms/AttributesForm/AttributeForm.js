import React, { Component } from 'react'
import { Form } from 'formik';

import { AttributeFormField } from '../../Formik/Fields'

import './styles.scss';
import classNames from 'classnames';

const renderAttributeFormField = (item, name, type, idx) => (
  <AttributeFormField key={item.id} item={item} type={type} name={name} />
);

class AttributeForm extends Component {
  componentDidUpdate(prevProps) {
    if(prevProps.values !== this.props.values) {
      this.handleValuesUpdate();
    }
  }

  handleValuesUpdate() {
    document.getElementById(`attribute-form-submit-` + this.props.itemId).click()
  }

  render() {
    return (
      <Form className="product-attributes-container" autoComplete="off">
        {this.props.initialValues?.map((attributeGroup) => 
          <div className='product-attribute' key={attributeGroup.name.toLowerCase()}  id={this.props.itemId}>
            <span className={classNames('product-attribute-heading', this.props.type === 'dropdown' && 'attribute-dropdown-heading')}>{attributeGroup.name}:</span>
            <div className={classNames('product-attribute-container', this.props.type === 'dropdown' && 'dropdown-type', this.props.atCart && 'form-disabled')}>
              {attributeGroup.items.map((item) => renderAttributeFormField(item, attributeGroup.name.toLowerCase(), attributeGroup.type))}
            </div>
          </div>
        )}
        <button id={`attribute-form-submit-${this.props.itemId}`} type="submit" className='attribute-form-btn' >
          Add to cart
        </button>
      </Form>
    )
  }
}

export default AttributeForm
