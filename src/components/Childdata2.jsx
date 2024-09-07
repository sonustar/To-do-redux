import React from 'react'

const Childdata2 = ({send}) => {
  return (
     <>
    <button onClick={()=>send("button 1 ")}>Click me 1!! </button>
    <button onClick={()=>send("button 2 ")}>Click me 2!! </button>
     </>

  )
}

export default Childdata2