import React, { Component } from 'react'
import { getParams } from '../../utils'
import './styles.scss'

export default class ProductPage extends Component {
    componentDidMount() {
        const params = getParams('category')
        this.setState({
            params: params
        })
    }
    render() {
        console.log(this.state?.params);
        return (
            <div>ProductPage</div>
        )
    }
}
