import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})
    const [userData, setUserData] = useContext(AuthContext)

    const submitHandler = (e) => {
        e.preventDefault()
        const task = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }
        setNewTask(task)

        const data = userData


        data.forEach(function (elem) {
            if (assignTo === elem.firstname) {
                elem.tasks.push(task)
                elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
            }
        })
        setUserData(data)
        console.log(data)

        
        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
    }
    return (
        <div>
            <div className="flex justify-center items-center">
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className="flex w-full bg-gray-800 p-5 rounded-lg gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col w-1/2 space-y-3">
                        <div>
                            <h3 className="mb-2 text-medium">Task Title</h3>
                            <input
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                type="text"
                                placeholder="Make a UI design"
                                className="w-full p-2 rounded-md bg-gray-700 text-white"
                            />
                        </div>
                        <div>
                            <h3 className="mb-2 text-medium">Date</h3>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                type="date"
                                className="w-full p-2 rounded-md bg-gray-700 text-white"
                            />
                        </div>
                        <div>
                            <h3 className="mb-2 text-medium">Assign to</h3>
                            <input
                                value={assignTo}
                                onChange={(e) => setAssignTo(e.target.value)}
                                type="text"
                                placeholder="Employee name"
                                className="w-full p-2 rounded-md bg-gray-700 text-white"
                            />
                        </div>
                        <div>
                            <h3 className="mb-2 text-medium">Category</h3>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                type="text"
                                placeholder="design, dev, etc"
                                className="w-full p-2 rounded-md bg-gray-700 text-white"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col w-1/2">
                        <div>
                            <h3 className="mb-2 text-medium">Description</h3>
                            <textarea
                                cols="30"
                                rows="8"
                                placeholder="Description of the task"
                                className="w-full p-3 rounded-md bg-gray-700 text-white resize-none"
                            ></textarea>
                        </div>
                        <div className="mt-7">
                            <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-md w-full">
                                Create Task
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
