import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const Banner = () => {

    const [todo, setTodo] = useState([])
    const Todo = todo.filter(item => item.category === 'ToDo')
    const ongoing = todo.filter(item => item.category === 'ongoing')
    const completed = todo.filter(item => item.category === 'completed')


    useEffect(() => {
        fetch('http://localhost:5000/todo')
             .then(res => res.json())
             .then(data => setTodo(data))
    },[])

    return (
        <>
        <div className='pt-16 py-3'>
            <div className='text-center font-bold text-2xl uppercase border  py-3 bg-teal-100'>To Do List</div>

             {Todo.map( user=> <h2 className='flex border bg-sky-200 rounded-lg md:mx-96 text-2xl font-medium pl-4 p-2 m-1'>{user.Asset_Name}<span className='absolute   md:ml-96 btn-ghost '><MdDelete /></span><CiEdit className='ml-3 btn-ghost'/></h2> )}

             <div className='text-center font-bold text-2xl  py-3 uppercase border bg-teal-100'>On Going List</div>

             {ongoing.map( user=> <h2 className='flex border bg-emerald-200 rounded-lg md:mx-96 text-2xl font-medium pl-4 p-2 m-1'>{user.Asset_Name}<span className='absolute   md:ml-96 btn-ghost '><MdDelete /></span><CiEdit className='ml-3 btn-ghost'/></h2> )}


             <div className='text-center font-bold text-2xl  py-3 uppercase border bg-teal-100'>completed List</div>

             {completed.map( user=> <h2 className='flex border bg-orange-200 rounded-lg md:mx-96 text-2xl font-medium pl-4 p-2 m-1'>{user.Asset_Name}<span className='absolute   md:ml-96 btn-ghost '><MdDelete /></span><CiEdit className='ml-3 btn-ghost'/></h2> )}
             
        </div>

        </>
            
       
    );
};

export default Banner;