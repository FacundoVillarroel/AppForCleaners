import React from 'react';

import "./user.css";

const User = ({user,setCurrentUser}) => {

  const handleClick = () => {
    setCurrentUser(user.name)
  }
  
  return (
    <div className='userContainer' onClick={handleClick}>
      <h1>{user.name}</h1>
    </div>
  )
}

export default User