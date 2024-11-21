import React from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {
  return (
        <div className='p-5 max-w-lg mx-auto'>

          <h1 className='text-center font-bold text-3xl p-5'>Sign Up</h1>

          <form className='flex flex-col gap-4'>
              <input type="text" name="username" id="username" placeholder='username' className='text-2xl rounded bg-slate-100 p-2'/>
              <input type="text" name="email" id="email" placeholder='email' className='text-2xl rounded bg-slate-100 p-2'/>
              <input type="password" name="password" id="password" placeholder='password' className='text-2xl rounded bg-slate-100 p-2'/>

              <button  className='bg-slate-300 p-5 rounded-lg uppercase font-bold hover:opacity-85 disabled: opacity-90'>Sign Up</button>
              
          </form>

          <div className='flex gap-2'>
            <p>Have an account?</p>

            <Link to = "/sign-in">
                <span className='text-blue-500'>Sign In</span>
            </Link>
          </div>
        </div>
  )
}

