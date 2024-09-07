import React from 'react'

const Childdata = ({onsendData}) => {

  // we can store id means send the id !! 


  return (
    <div>
      <div>{onsendData}</div>
      <input type="text" 
       onChange={(e)=>{
          onsendData(e.target.value)
       }}
      />

    </div>

  )
}

export default Childdata