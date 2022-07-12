import React, { Component } from 'react'
import { Form } from 'formik';

import { AttributeFormField } from '../../Formik/Fields'

// import './styles.scss';

const renderAttributeFormField = (item, name, idx) => (
  <AttributeFormField key={idx} item={item} name={name} />
);

class AttributeForm extends Component {
  render() {
    return (
      <Form className="" autoComplete="off" ref={this.wrapperRef}>
        <div className="dropdown-fields-container">
            {this.props.values.items.map((item) => renderAttributeFormField(item, this.props.values.name.toLowerCase()))}
        </div>
        <button id="form-submit" type="submit" />
      </Form>
    )
  }
}

export default AttributeForm
