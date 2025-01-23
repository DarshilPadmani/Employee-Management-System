import React, { useState } from 'react'

const login = ({ handleLogin }) => {

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')


        const submitHandler=(e)=>{
            e.preventDefault()
            handleLogin(email, password)
            console.log('email is', email)
            console.log('password is', password)

            setEmail('')
            setPassword('')
        }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className='flex flex-col items-center justify-center'>
                    <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray' type='email' placeholder='Enter your email' />
                    <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required className= 'outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray  mt-3' type='password' placeholder='Enter your password' />
                    <button className='text-white outline-none border-none bg-emerald-600 rounded-full py-2 px-10 text-xl placeholder:text-white mt-5' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default login
