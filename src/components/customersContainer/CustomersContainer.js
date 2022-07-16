import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import Customer from '../custormer/Customer';

const CustomersContainer = () => {

  const { usersList, currentUser } = useContext(UserContext)
  
  const customers = usersList.find(user => user.name === currentUser).customers;
  
  return (
    <div className='container pb-5'>
      <h2 className='text-center pt-5 mb-5 title'>CUSTOMERS</h2>
      {customers.map((customer, key) => {
        return <Customer customer={customer} key={key}/>
      })}
    </div>
  )
}

export default CustomersContainer