import React, { useState } from 'react';

export default function Contact() {
  const [input, setInput] = useState({ name: '', email: '', message: '' })
  const { name, email, message } = input;

  // email validation using regex (see my github jist on regex email validation)
  function emailValidator(email) {
    let emailRegex = /^([a-z0-9_-]+)@([\da-z-]+)\.([a-z]{2,6})$/;
    let result = emailRegex.test(email);
    return result;
  }

  // function to handle form changes
  const formChange = (e) => {
    e.preventDefault();
    // check for no value
    if (e.target.value.length === 0) {
      console.log('Error, that field is required');
    } else {
      setInput({ ...input, [e.target.name]: e.target.value })
    }
    // check for email field, then validate email
    if (e.target.name == "email") {
      const emailValidation = emailValidator(e.target.value)
      !emailValidation ? console.log('Not a valid email') : setInput({ ...input, [e.target.name]: e.target.value });
    }
  }
  // work around - windows alert created endless loop to be stuck in
  function formCheck() {
    if (name === '' || email === '' || message === '') {
      window.alert('There are errors in the form')
    }
  }

  const formSubmit = (e) => {
    e.preventDefault();
    formCheck(); // ***** REMOVE WHEN WE FIX ERROR MESSAGE
  }

  // style for page specific
  const style = {
    contactStyle: {
      width: '320px'
    },
    labelStyle: {
      width: '150 px'
    }
  }



  return (
    <div className='m-5'>
      <form className='justify-content-center' onSubmit={formSubmit}>
        <div>
          <label style={style.labelStyle} className='p-2'>Name:</label>
          <input
            style={style.contactStyle}
            type="text"
            name='name'
            placeholder='Please enter your name here'
            onBlur={formChange}
          />
        </div>
        <div>
          <label style={style.labelStyle} className='p-2'>Email:</label>
          <input
            style={style.contactStyle}
            type="email"
            name="email"
            placeholder='"Please enter your email here'
            onBlur={formChange}
          />
        </div>
        <div>
          <label style={style.labelStyle} className='p-2'>Message:</label>
          <textarea
            style={style.contactStyle}
            name='message'
            placeholder='Please enter your message here'
            onBlur={formChange}
            rows="5"
          />
        </div>
        <div>
          <button type='submit' className='btn btn-primary m-1'>Reach out to me!</button>
        </div>
      </form>
    </div>
  );
}
