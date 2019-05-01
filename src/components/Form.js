import React, {Component} from 'react';
import FormComponent from '../containers/Form';

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
            showMessage: false,
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange = (event) => {

        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
        const { phone, email, url } = this.state;

        const emailRegex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        const nameRegex = /^[a-zA-Z]{5,30}$/;
        const phoneRegex = /^[2-9][0-9]\d{8}$/;

        this.validateInput(email, emailRegex) ? this.setState({isEmailValid: true}): 
        this.setState({isEmailValid: false});
            
        this.validateInput(phone, phoneRegex) ? this.setState({isPhoneValid: true}): 
        this.setState({isPhoneValid: false});

        this.validateInput(url, urlRegex) ? this.setState({isUrlValid: true}): 
        this.setState({isUrlValid: false});
        
        this.validateInput(this.state.name, nameRegex) ? this.setState({isNameValid: true}): 
        this.setState({isNameValid: false});
            
    } 

    showForm = () => {
        return(
            <React.Fragment>
                <FormComponent
                    state = {this.state}
                    onChange = {this.onChange}
                    onClick = {this.onClick}
                />
            </React.Fragment>
        );
    }

    onClick = () => {
        const { 
            isEmailValid, 
            isPhoneValid,
            isNameValid,
            isUrlValid } = this.state;
        isEmailValid && isPhoneValid && 
        isNameValid && isUrlValid &&
        this.setState({showMessage: true},
        () => {this.showForm()});
    }

    validateInput = (input, regex) =>{
        return String(input).search (regex) !== -1;
    }

    render() {
        return (
            <div>
             {this.showForm()}
            </div> 
        );
    }
}

export default Form;
