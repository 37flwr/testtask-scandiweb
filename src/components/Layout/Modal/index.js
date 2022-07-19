import { Component } from 'react';

import './styles.scss';

export default class Modal extends Component {
    render() {
        return (
            <>
                <section className='modal'>
                    <div className='modal-container'>
                        <p className='modal-text'>
                            <span className='modal-text-heading'><b>Make sure you:</b></span>
                            <ul className='modal-text-list'>
                                <li className='modal-text-item'>Clone https://github.com/scandiweb/junior-react-endpoint</li>
                                <li className='modal-text-item'>Install packages (type "npm install" in terminal)</li>
                                <li className='modal-text-item'>Run "yarn start"</li>
                            </ul>
                        </p>
                        <button
                            className='modal-button'
                            onClick={() => this.props.handleClick()}
                        >
                            Close
                        </button>
                    </div>
                </section>
                <div className='modal-blur' />
            </>
        )
    }
}
