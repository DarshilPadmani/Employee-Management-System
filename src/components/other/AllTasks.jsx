import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
    const [userData,setUserData] = useContext(AuthContext)

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded '>
            <div className='bg-gray-800 py-2 mb-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5 bg-gray-700'>Employee Name</h2>
                <h2 className='text-lg font-medium w-1/5 bg-gray-700'>New Task</h2>
                <h2 className='text-lg font-medium w-1/5 bg-gray-700'>Active Task</h2>
                <h2 className='text-lg font-medium w-1/5 bg-gray-700'>Complete</h2>
                <h2 className='text-lg font-medium w-1/5 bg-gray-700'>Failed</h2>
            </div>
            <div className=''>
                {userData.map((elem, index) => (
                    <div key={index} className='bg-gray-800 py-2 mb-2 px-4 flex justify-between rounded'>
                        <h2 className='text-lg font-medium w-1/5 text-gray-200'>{elem.firstname}</h2>
                        <h2 className='text-lg font-medium w-1/5 text-blue-500'>{elem.taskNumbers.newTask}</h2>
                        <h2 className='text-lg font-medium w-1/5 text-yellow-500'>{elem.taskNumbers.active}</h2>
                        <h2 className='text-lg font-medium w-1/5 text-green-500'>{elem.taskNumbers.completed}</h2>
                        <h2 className='text-lg font-medium w-1/5 text-red-500'>{elem.taskNumbers.failed}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTasks