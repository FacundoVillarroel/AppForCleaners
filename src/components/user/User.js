import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const User = ({user}) => {

  const { currentUser, setCurrentUser } = useContext(UserContext)

  const handleClick = () => {
    setCurrentUser(user.name)
  }
  
  return (
    <div className={`userContainer ${currentUser === user.name && ("currentUser" || "")}`}  onClick={handleClick}>
      <h1>{user.name}</h1>
    </div>
  )
}

export default User