import React from 'react';
import Message from '../components/Message';

 const Form = (props) => {
    const { 
        onChange,
        showMessage, 
        state: { name, email, phone, url },
    } = props;
  return (
    <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                </h3>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={onChange}>
                </input>
                <h3>Email:
                </h3>
                <input 
                    type="text" 
                    name="email" 
                    value={email} 
                    onChange={onChange}>
                </input>
                <h3>Phone:
                </h3>
                <input 
                    type="text" 
                    name="phone" 
                    value={phone} 
                    onChange={onChange}>
                </input>
                <h3>Blog URL:
                </h3>
                <input 
                    type="text" 
                    name="url"
                    value={url} 
                    onChange={onChange}>
                </input>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center">Verify</a>
                </div>
            </form>
            {showMessage && <Message/>}
        </div>
  )
}
export default Form;