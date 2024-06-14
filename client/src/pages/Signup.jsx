import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({});

  const handleChange  = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch('/api/auth/signup', {
        method : 'POST',
        headers : {'Content-type' : 'application/json'},
        body : JSON.stringify(formData),
      })
    } catch(error){}
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/*Left side content*/}
        <div className='flex-1'>
          <Link to="/" className='text-4xl font-bold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white mx-auto'>Reddy's</span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign up with your email and password. or via google.
          </p>
        </div>
        {/*Right side content*/}
        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput type="text" placeholder='Username' id="username" onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your email' />
              <TextInput type="text" placeholder='name@company.com' id="email" onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type="password" placeholder='Password' id="password" onChange={handleChange}/>
            </div>
            <Button type='submit' gradientDuoTone='purpleToPink'>
              Sign Up
            </Button>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account</span>
              <Link to='/sign-in' className='text-blue-500'>
                  Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
