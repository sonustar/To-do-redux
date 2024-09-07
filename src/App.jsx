import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import Childdata from './components/Childdata';
import Childdata2 from './components/Childdata2';
// import products from './store/expenses.json';
const App = () => {

    const [data,setdata] = useState('Hii')
    // initialize the object !! 
    const [todo, setTodo] = useState({ id: null, text: '' })
    
    // todo : gets updated -> recieve the obeject 
    const fun = (msg)=>{
        // Update the object !! :)
        setTodo({
            id: msg.id ,
            text: msg.text 
        })

        
    }

    // console.log("Sending props " , todo)
    
   
    

    return (
        <>
            <h1 className='mb-10'>Parent app </h1>

            <p>{data}</p>
             
            
             {/* sending the text !! :) */}
            <AddTodo  id = {todo.id} text = {todo.text}  />

            <Todo send={fun} />
            
        </>
    );
};

export default App;
