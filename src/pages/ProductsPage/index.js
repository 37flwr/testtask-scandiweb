import React, { Component } from 'react'
import { useParams } from 'react-router';
import './styles.scss'

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class ProductPage extends Component {
    componentDidMount() {
        this.setState({
            type: this.props.params.category
        })
    }
    render() {
        console.log(this.state?.type.slice(1));
        return (
            <div>
                1
            </div>
        )
    }
}

export default withParams(ProductPage)
