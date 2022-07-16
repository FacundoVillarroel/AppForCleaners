import React from 'react';

import "./customer.css";

const Customer = ({customer}) => {
  
  const {name, address, nextCleaning, hours, frequency} = customer

  return (
    <div className='customerContainer'>
      <h2 className='text-center mb-5 mt-3'>{name}</h2>
      <div className='customerData'>
        <div>
          <span className='bold'>Address:</span> <p className='info'>{address}</p></div>
        <div>
          <span className='bold'>Next Cleaning:</span> <p className='info'>{nextCleaning.date} {nextCleaning.time}</p></div>
        <div>
          <span className='bold'>Hours:</span> <p className='info'>{hours}</p></div>
        <div>
          <span className='bold'>Frequency:</span> <p className='info'>{frequency}</p></div>
      </div>
    </div>
  )
}

export default Customer