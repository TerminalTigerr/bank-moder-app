import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button type='button' className={`py-4 px-6 bg-blue-gradient 
                font-poppins font-medium text-lg rounded-lg text-primary outline:none 
                ${this.props.styles} hover:scale-[1.10] transition-all ease-in-out duration-700`}>
                Get Started
            </button>
        );
    }
}

export default Button;