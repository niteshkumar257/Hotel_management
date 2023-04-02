import React from 'react'
import "./User.scss";
import user from "./waiter.png"

const User = ({name,status,date_of_joining}) => {
  return (
   <div className='user_container'>
    
      <div className='left'>
      <img src={user}/>
      </div>
      <div className='right'>
      <div> 
        <span>Name: </span>
        <span>{name}</span>
      </div>
      <div> 
        <span>Staff: </span>
        <span>{status?"Staff":"Admin"}</span>
      </div>
      <div> 
        <span>Date of joining: </span>
        <span>{date_of_joining.slice(0,10)}</span>
      </div>
      </div>

   </div>
  )
}

export default User