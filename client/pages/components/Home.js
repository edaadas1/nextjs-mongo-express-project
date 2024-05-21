import React, { useState, useEffect } from 'react'
import Create from './Create'
import axios from 'axios';
import { BsCircleFill } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsFillCheckCircleFill } from 'react-icons/bs'

const Home = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/get")
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put("http://localhost:3001/update/" + id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/delete/" + id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <div className='bg-slate-500 w-2/4 h-[550px] mx-auto flex flex-col items-center gap-6 pt-32 mt-10'>
                <h2 className='text-2xl text-white'>Todo List</h2>
                <Create />
                {
                    todos.length === 0 ?
                        <div><h2>No Record</h2></div> :
                        todos.map((todo) => (
                            <div className='bg-black text-white w-[45%] px-5 py-2 flex items-center justify-between'>
                                <div className='flex items-center gap-2' onClick={() => handleEdit(todo._id)}>
                                    {
                                        todo.done ? <BsFillCheckCircleFill /> : <BsCircleFill />
                                    }
                                    <p className={todo.done ? "line-through" : ""}>{todo.task}</p>
                                </div>
                                <div onClick={() => handleDelete(todo._id)}>
                                    <BsFillTrashFill />
                                </div>
                            </div>
                        ))

                }
            </div >
        </>
    )
}

export default Home
