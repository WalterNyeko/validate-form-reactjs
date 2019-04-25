import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import FormComponent from '../containers/Form';
import Message from '../components/Message';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            email: '',
            name: '',
            phone: '',
            url: '',
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    } 

    onClick = (event) =>{
        event.preventDefault();
        this.validateEmail(this.state.email) && this.setState({isEmailValid: true})

        const { 
            isEmailValid, 
            isNameValid, 
            isUrlValid, 
            isPhoneValid ,
            phone,
            email,
            url,
            name,
        } = this.state;
        isEmailValid && isNameValid && isUrlValid && isPhoneValid && <Message />
    }

    validateEmail(email) {
        var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        return String(email).search (filter) != -1;
    }
    
    render() {
        return (
            <FormComponent 
                state={this.state}
                onChange = {this.onChange}
            />
        );
    }
}

export default Form;
