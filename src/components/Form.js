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
        const {
            phone,
            email,
            url,
        } = this.state;
        this.validateEmail(email) &&  this.setState({isEmailValid: true});
            
        this.validatePhone(phone) && this.setState({isPhoneValid: true});

        this.validateUrl(url) && this.setState({isUrlValid: true});
        
        this.validateName(this.state.name) && this.setState({isNameValid: true});
            
    } 

    showForm = () => {
        return(
            <div>
                {console.log(this.state)}
                <FormComponent
                    state={this.state}
                    onChange = {this.onChange}
                    onClick = {this.onClick}
                />
            </div>
            
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

    validateEmail(email) {
        const filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        return String(email).search (filter) != -1;
    }

    validateName = (name) => {
        const filter = /^[a-zA-Z]{5,30}$/;
        return String(name).search (filter) != -1;
    }

    validateUrl = (url) => {
        const filter = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        return String(url).search (filter) != -1;
    }

    validatePhone = (phone) => {
        var filter = /^[2-9][0-9]\d{8}$/;
        return String(phone).search (filter) != -1;
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
