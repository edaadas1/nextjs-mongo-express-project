import React, { useState } from 'react'
import axios from 'axios';

const Create = () => {

    const [task, setTask] = useState("");

    const handleAdd = () => {
        if (task !== "") {
            axios.post('http://localhost:3001/add', { task: task })
                .then(result => {
                    location.reload()
                })
                .catch(err => console.log(err));
        }
        else {
            alert("Write a task");
        }

    }


    return (
        <div className=' w-[45%] flex justify-between py-2'>
            <input type='text' name="" id="" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} className='px-2' />
            <button type='button' onClick={handleAdd} className='border border-white w-20 text-white'>Add</button>
        </div>
    )
}

export default Create
