import React, {useContext} from 'react';

import UsersContainer from '../users/UsersContainer';
import CalendarContainer from '../calendarContainer/CalendarContainer';
import CustomersContainer from "../customersContainer/CustomersContainer";
import NewCustomerForm from '../newCustomer/NewCustomerForm';

import { UserContext } from '../../context/UserContext';


const Body = () => {

  const { currentUser } = useContext( UserContext )

  return (
    <div>
      <div className="container body">
        <h1 className='text-center pt-5 title'>USERS</h1>
        <UsersContainer/>
        { currentUser && 
          <>
            <CalendarContainer/>
            <CustomersContainer/>
            <NewCustomerForm />
          </>
        }
        { !currentUser && <h3 className='text-center pb-5'>You must select an user</h3>}
      </div>
    </div>
  )
}

export default Body