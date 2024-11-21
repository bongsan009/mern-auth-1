import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      // navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };



  return (
        <div className='p-5 max-w-lg mx-auto'>

          <h1 className='text-center font-bold text-3xl p-5'>Sign Up</h1>

          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <input type="text" name="username" id="username" placeholder='username' className='text-2xl rounded bg-slate-100 p-2'
              onChange={handleChange}/>
              <input type="text" name="email" id="email" placeholder='email' className='text-2xl rounded bg-slate-100 p-2'
              onChange={handleChange}/>
              <input type="password" name="password" id="password" placeholder='password' className='text-2xl rounded bg-slate-100 p-2'
              onChange={handleChange}/>

              <button  className='bg-slate-300 p-5 rounded-lg uppercase font-bold hover:opacity-85 disabled: opacity-90'>
                {loading? "Loading..." : "Sign Up"}
              </button>
              
          </form>

          <div className='flex gap-2'>
            <p>Have an account?</p>

            <Link to = "/sign-in">
                <span className='text-blue-500'>Sign In</span>
            </Link>
          </div>

          <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
        </div>
  )
}

