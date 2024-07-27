import { useState } from 'react'

function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  })

  const { name, email, message } = values

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }
  return (
    <form>
      <div className='login-password'>
        <input
          type='text'
          className='username'
          value={name}
          placeholder='Name'
          required
          onChange={handleChange('name')}
        />
      </div>
      {/* <span className='error'>{nameError}</span> */}
      <div className='login-password'>
        <input
          type='text'
          className='username'
          value={email}
          placeholder='Email'
          required
          onChange={handleChange('email')}
        />
      </div>
      <div className='login-password'>
        <textarea
          cols='30'
          rows='6'
          onChange={handleChange('message')}
          placeholder='message'
          required
        ></textarea>
      </div>
      {/* <span className='error'>{emailError}</span> */}

      <button className=' loginBtn' href='mailto:agyapongmordecai@gmail.com'>
        submit
      </button>
    </form>
  )
}

export default Contact
