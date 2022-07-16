import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import "./usersContainer.css"

import User from '../user/User';

const UsersContainer = () => {

  const { usersList } = useContext( UserContext )

  return (
    <div className="usersContainer">
      {usersList.map((user, key) => {
          return <User user={user} key={key}/>
      })}
    </div>
  )
}

export default UsersContainer