'use client';

import { useState } from 'react'
import InputGroup from '@/components/InputGroup'
import Divider from '@/components/Divider'
import { Login } from '../lib/Request';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const router = useRouter();


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  // const [responseMessage, setResponseMessage] = useState('')
  // let response;

  // value that tell us it is login page?
  // true => login
  // false => register
  const [swap, setSwap] = useState(true)

  const handleSubmit = async () => {

    const response = await Login({ email, password });

    if (response?.status === 200) {

      router.push('/')

    }
  }

    return (
      <div className='flex justify-between items-center bg-slate-50 rounded text-black'>
        {/* left */}
        <section className='w-[50%] flex justify-center'>
          <div>

            <h1 className='text-3xl font-bold'>Welcome to 627 Academy</h1>
            <p>please enter you details</p>

            <div className='mt-6 p-2'>

              <InputGroup name='email' label='Email Address' handleChange={setEmail} value={email} type='email' />
              <InputGroup name='password' label='Password' handleChange={setPassword} value={password} type='password' />


              <Divider label='or' />

              <div className='my-2'>
                <button type='button' onClick={handleSubmit} className='w-full rounded border border-slate-100 w-20 h-10 bg-gray-300 text-slate-700 hover: hover:bg-gray-200'>
                  Login
                </button>
              </div>

            </div>
          </div>
        </section >
        {/* right */}
        {/* right */}
        <section className='w-[50%]'>
          <img src="https://picsum.photos/id/239/640/670" alt="" className='' />
        </section>
      </div>
    )
  }

export default LoginPage
