import { doc, getDoc, updateDoc, collection, getDocs } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { db } from '../../firebase/config';

const NewCustomerForm = () => {
  const [messageSent, setMessageSent ] = useState(false)

  const { usersList, setUsersList, currentUser } = useContext(UserContext)

  const user = usersList.find(user => user.name === currentUser)

  const [ newCustomer, setNewCustomer ] = useState({
    name:"",
    address:"",
    hours:"",
    type:"helpling",
    frequency:"once",
    nextCleaning:{
      date:"",
      time:""
    }
  })

  const handleInputChange = (e) => {
    setNewCustomer({
      ...newCustomer,
      [e.target.name]: e.target.value
    })
  }

  const handleInputChangeDate = (e) => {
    setNewCustomer({
      ...newCustomer,
      nextCleaning:{
        ...newCustomer.nextCleaning,
        [e.target.name]:e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "usersList", user.id)
    const userRef = doc(db, "usersList", user.id)

    const userFirebase = (await getDoc(userRef)).data()
    userFirebase.customers.push(newCustomer)

    await updateDoc(docRef, {
      customers:userFirebase.customers

    })
    
    setMessageSent(true)
    
    const usersListRef = collection( db, "usersList" );
    
    getDocs( usersListRef )
    .then( resp => {
      const usersListFirebase = resp.docs.map((doc) => ({id:doc.id, ...doc.data()}))
      setUsersList(usersListFirebase)
    })
  }

  const handleClick = () => {
    setMessageSent(false)
    setNewCustomer({name:"",
    address:"",
    hours:"",
    type:"helpling",
    frequency:"once",
    nextCleaning:{
      date:"",
      time:""
    }})
  }

  return (
    <div className='newCustomerContainer'>
      <h2 className='text-center pt-5 mb-5 title'>ADD NEW CUSTOMER</h2>
      {
        messageSent 
          ? <div className='container customerAddedContainer'>
              <h1 className='text-center py-5'>Customer added successfully</h1> 
              <button type='button' className='btnAdd' onClick={handleClick}> Add New Customer</button>
            </div>
          : <form className="form">
              <input type="text" name='name' placeholder='WRITE CUSTOMER NAME' value={newCustomer.name} onChange={handleInputChange} required/>
              <input type="text" name='address' placeholder='WRITE CUSTOMER ADDRESS' value={newCustomer.address} onChange={handleInputChange} required/>
              <input type="date" id='date' name='date' placeholder='DD/MM/YYYY' value={newCustomer.nextCleaning.date} onChange={handleInputChangeDate}/> 
              <input type="time" id='time' name='time' placeholder='HH/MM' value={newCustomer.nextCleaning.time} onChange={handleInputChangeDate}/> 
              <input type="number" name='hours' placeholder='WRITE AMOUNT OF HOURS ' value={newCustomer.hours} onChange={handleInputChange}/>
              <select name='type' id='type' value={newCustomer.type} onChange={handleInputChange}>
                <option value="helpling">HELPLING</option>
                <option value="particular">PARTICULAR</option>
              </select>
              <select name='frequency' id='frequency' value={newCustomer.frequency} onChange={handleInputChange}>
                <option value="once">ONCE</option>
                <option value="weekly">WEEKLY</option>
                <option value="biWeekly">BIWEEKLY</option>
              </select>
              <button className='btnSend' onClick={handleSubmit}>SEND</button>
            </form>
      }
      
    </div>
  )
}

export default NewCustomerForm;