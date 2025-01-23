import React, { useState, useEffect } from 'react'

const Header = (props) => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (!props.data) {
      setUsername('Admin')
    } else {
      setUsername(props.data.firstname)
    }
  }, [props.data])

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between p-5 text-white'>
      <h1 className='text-2xl font-medium text-white'>Hello,<br /><span className='text-3xl text-white font-semibold'>{username} 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-500 text-white tex-lg font-medium px-3 py-2 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header