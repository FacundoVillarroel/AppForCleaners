import React from 'react';

import "./usersContainer.css"

import User from '../user/User';

const UsersContainer = ({usersList, setCurrentUser}) => {

  return (
    <div className="usersContainer">
      {usersList.map((user, key) => {
          return <User user={user} key={key} setCurrentUser={setCurrentUser}/>
      })}
    </div>
  )
}

export default UsersContainer