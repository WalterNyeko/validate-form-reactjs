import React from 'react';
import Message from '../components/Message';
import { PropTypes } from 'prop-types';

 const Form = (props) => {
    const { 
        onChange,
        onClick, 
        state: { name, email, phone, url, showMessage },
    } = props;
  return (
    <React.Fragment>
    <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                </h3>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    className="name"
                    onChange={onChange}>
                </input>
                <h3>Email:
                </h3>
                <input 
                    type="text" 
                    name="email" 
                    value={email} 
                    className="email"
                    onChange={onChange}>
                </input>
                <h3>Phone:
                </h3>
                <input 
                    type="text" 
                    name="phone" 
                    value={phone} 
                    className="phone"
                    onChange={onChange}>
                </input>
                <h3>Blog URL:
                </h3>
                <input 
                    type="text" 
                    name="url"
                    value={url} 
                    className="url"
                    onChange={onChange}>
                </input>
                <div className="small-6 small-centered text-center columns" onClick={onClick}>
                    <a href="/" className="button success expand round text-center">Verify</a>
                </div>
            </form>
            
        </div>
        {showMessage && <Message/>}
        </React.Fragment>
  )
}

Form.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    state: PropTypes.object,
}
export default Form;