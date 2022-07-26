import React, {useContext} from 'react';

import UsersContainer from '../users/UsersContainer';
import Calendar from '../calendar/Calendar';
import CalendarContainer from '../calendarContainer/CalendarContainer';
import CustomersContainer from "../customersContainer/CustomersContainer";
import NewCustomerForm from '../newCustomer/NewCustomerForm';

import { UserContext } from '../../context/UserContext';


const Body = () => {

  const { currentUser } = useContext( UserContext )

  return (
    <div>
      <div className="container">
        <UsersContainer/>
        { currentUser && 
          <>
            {/* <Calendar/> */}
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