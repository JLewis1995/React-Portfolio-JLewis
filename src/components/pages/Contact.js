import React, { useState } from 'react';

export default function Contact() {
  const [input, setInput] = useState({ name: '', email: '', message: '' })
  const { name, email, message } = input;
  const [formErrors, setFormErrors] = useState({ name:  {error:""}, email: {error:""}, message: {error:""}})

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
      setFormErrors({ ...formErrors, [e.target.name]: {error: true}})
    } else {
      setInput({ ...input, [e.target.name]: e.target.value })
      setFormErrors({ ...formErrors, [e.target.name]: {error: false}})
    }

    // check for email field, then validate email
    if (e.target.name == "email") {
      const emailValidation = emailValidator(e.target.value);
      if (!emailValidation){
        setFormErrors({ ...formErrors, [e.target.name]: {error: true}})
      } else {
        setFormErrors({ ...formErrors, [e.target.name]: {error: false}})
        setInput({ ...input, [e.target.name]: e.target.value });
      }
    }
  }

  const formSubmit = (e) => {
    e.preventDefault();
  }

  // style for page specific
  const style = {
    contactStyle: {
      width: '320px'
    },
    labelStyle: {
      width: '150 px'
    },
    red: {
      color: "red"
    }
  }



  return (
    <div className='m-5'>
      <form className='justify-content-center' onSubmit={formSubmit}>
        {/* name div */}
        <div>
          <label style={style.labelStyle} className='p-2'>Name:</label>
          <input
            style={style.contactStyle}
            type="text"
            name='name'
            placeholder='Please enter your name here'
            onBlur={formChange}
          />
          {formErrors.name.error &&
          <div style={style.red}>Must have name entered</div>
          }
        </div>
        {/* email div */}
        <div>
          <label style={style.labelStyle} className='p-2'>Email:</label>
          <input
            style={style.contactStyle}
            type="email"
            name="email"
            placeholder='"Please enter your email here'
            onBlur={formChange}
          />
           {formErrors.email.error &&
          <div style={style.red}>Must have emailed entered</div>
          }
        </div>
        {/* message div */}
        <div>
          <label style={style.labelStyle} className='p-2'>Message:</label>
          <textarea
            style={style.contactStyle}
            name='message'
            placeholder='Please enter your message here'
            onBlur={formChange}
            rows="5"
          />
            {formErrors.message.error &&
          <div style={style.red}>Must have message entered</div>
          }
        </div>
        {/* submit button div */}
        <div>
          <button type='submit' className='btn btn-primary m-1'>Reach out to me!</button>
        </div>
      </form>
    </div>
  );
}
