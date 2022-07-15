import React from 'react';

import "./customer.css";

const Customer = ({customer}) => {
  
  const {name, address, nextCleaning, hours, frequency} = customer

  return (
    <div className='customerContainer'>
      <h2 className='text-center mb-5'>{name}</h2>
      <div className='customerData'>
        <p>Address: {address}</p>
        <p>Next Cleaning: {nextCleaning}</p>
        <p>hours: {hours}</p>
        <p>frequency: {frequency}</p>
      </div>
    </div>
  )
}

export default Customer