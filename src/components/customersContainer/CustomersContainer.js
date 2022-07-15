import React from 'react';

import Customer from '../custormer/Customer';

const CustomersContainer = ({usersList , currentUser}) => {
  
  const customers = usersList.find(user => user.name === currentUser).customers;
  
  return (
    <div className='container'>
      {customers.map((customer, key) => {
        return <Customer customer={customer} key={key}/>
      })}
    </div>
  )
}

export default CustomersContainer