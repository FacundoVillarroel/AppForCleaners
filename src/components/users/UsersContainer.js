import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import User from '../user/User';

const UsersContainer = () => {

  const { usersList } = useContext( UserContext )

  return (
    <div className="usersContainer">
      <h1 className='text-center pt-5 title'>USERS</h1>
      <div className='usersFlex'>
        {usersList.map((user, key) => {
            return <User user={user} key={key}/>
        })}
      </div>
    </div>
  )
}

export default UsersContainer