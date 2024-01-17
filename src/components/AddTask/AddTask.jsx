import React from 'react';
import Swal from 'sweetalert2'

const AddTask = () => {
    const handleAdd = event => {
        event.preventDefault()
        const form = event.target;
        const Asset_Name = form.taskName.value;
        const category = form.category.value;
        const task = {Asset_Name , category}
        console.log(task);

        // send data to the server
        fetch('https://job-task-server-beta.vercel.app/todo', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' // Corrected the header name
    },
    body: JSON.stringify(task)})
    .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Added',
                    text: 'Thanks',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
    return (
        <form onSubmit={handleAdd}>
            <h2 className='pt-16 text-center text-xl font-bold '>Add A Task</h2>
           

            <label className="form-control w-full max-w-xs m-auto">
           
            <select name="category" id="category" className='my-4 border md:w-full h-12 text-lg text-center'>
                    <option value="ToDo">To Do List</option>
                    <option value="ongoing">On Going List</option>
                    <option value="completed">completed List</option>
                </select>
                </label>

                <label className="form-control w-full max-w-xs m-auto mb-3">
           <input type="text" name='taskName' placeholder="Task Name" className=" input input-bordered w-full max-w-xs" />
            </label>

            <div className='w-48 m-auto'><input type="submit" name="" className=' px-24 mb-3 btn m-auto' value='Add' id="" /></div>
     </form>
    );
};

export default AddTask;