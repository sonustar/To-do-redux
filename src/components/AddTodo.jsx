import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { additem , updateTodo } from '../features/todo/TodoSlice';

const AddTodo = (props) => {
    const [input, setInput] = useState('');
    const [Edit,setEdit] = useState('')

    // send to the store !! 
    const dispatch = useDispatch();


    // Why I put the useEffect ?
    // -> becoz we were getting the props but can't update my Edit (US)
    // Logic -> any change in the useStat
    useEffect(()=>{
        
        if(props.id){
            setEdit(props.text);
        }
        console.log("inside prop !! ")

    },[props.id,props.text])

    const addTodoHandler = (e) => {
        // Due to page refresh what happens
        e.preventDefault();

        if(input.length == 0)
    {
         console.log("Please fill it !! ")
    }   else {

        // what we are sending ? -> text 
        dispatch(additem(input))
        setInput('')
    }          
    };

    return (
        <form  className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                // keeps the value of the input !! 
                value={input}
                // Onchange : change is reflected !!
                // e : event 
                // target.value : is the value 
                // which is setup !! 
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={addTodoHandler}
            >
                Add Todo
            </button>







            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={Edit}
                // prev mai change hooga 
                onChange={(e) => setEdit(e.target.value)}
            />

            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={(e)=>{
                    
                    e.preventDefault()
                    dispatch(updateTodo({
                        id:props.id,
                        text: Edit
                    }))
                    // after sending the value the placeholder should be empty !!
                    setEdit('')
                }}
            >
                Save
            </button>
        </form>
    );
};

export default AddTodo;
