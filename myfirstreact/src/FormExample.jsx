import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormExample = () => {

  const [userName, setUserName] = useState("") 

  const [newUserDetails, setNewUserDeatils] = useState();

  const notify = () => toast("Your data is Uploaded Sucessfully!")

  const getUserName = (event) => {
   setUserName(event.target.value);
  }

  const userDetails =(e) =>{
    e.preventDefault()
    setNewUserDeatils(userName);
    notify()
  }

  return (
    <section className='formSection'>
        <h2>Hello, {newUserDetails}</h2>
        <ToastContainer />
      <div className='inputDiv'> 
        <form onSubmit={userDetails}>
          <input type="text" placeholder='Enter your Name' onChange ={getUserName}/>
          <br/>
          <button className='submitBtn' type='submit'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default FormExample
