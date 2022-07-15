import React from 'react';

import "./newCustomerForm.css";

const NewCustomerForm = () => {



  return (
    <div>
      <form className="form">
        <input type="text" name='name' placeholder='WRITE CUSTOMER NAME' required/>
        <input type="text" name='address' placeholder='WRITE CUSTOMER ADDRESS' required/>
        <input type="number" name='hours' placeholder='WRITE AMOUNT OF HOURS '/>
        <select name='type' id='type'>
          <option value="Helpling">HELPLING</option>
          <option value="Particular">PARTICULAR</option>
        </select>
        <select name='frequency' id='frequency'>
          <option value="once">ONCE</option>
          <option value="weekly">WEEKLY</option>
          <option value="biWeekly">BIWEEKLY</option>
        </select>
      </form>
    </div>
  )
}

export default NewCustomerForm;