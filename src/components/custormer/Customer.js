import React, { useContext } from 'react';
import {BsFillTrashFill} from "react-icons/bs";
import { doc, getDoc, collection, getDocs, writeBatch } from 'firebase/firestore';
import {db} from "../../firebase/config";

import "./customer.css";
import { UserContext } from '../../context/UserContext';

const Customer = ({customer}) => {

  const { currentUser, usersList, setUsersList } = useContext(UserContext)
  
  const {name, address, nextCleaning, hours, frequency} = customer

  const removeItem = async (name, usersList, currentUser) => {

    let answer;
    if(window.confirm("Do you want to delete this user?")) {
      answer = true
    } else {
      answer = false
    }

    if(answer){
      const userId = (usersList.find(user => user.name === currentUser)).id
      
      const batch = writeBatch(db);
      const docRef = doc(db , "usersList", userId)
      const userFirebase = (await getDoc(docRef))
      const customers = userFirebase.data().customers
      const updatedCustomers = customers.filter(customer => customer.name !== name);
      batch.update(userFirebase.ref, {
        customers: updatedCustomers
      })
      await batch.commit()
      const usersListRef = collection( db, "usersList" );
      
      getDocs( usersListRef )
        .then( resp => {
          const usersListFirebase = resp.docs.map((doc) => ({id:doc.id, ...doc.data()}))
          setUsersList(usersListFirebase)
        })
    } 
  }

  return (
    <div className='customerContainer'>
      <div className='customerName'>
        <h2 className='text-center mb-5 mt-3'>{name} :</h2>
        <button onClick={() => removeItem(name, usersList, currentUser)} className="btnDeleteUser"> <BsFillTrashFill/></button>
      </div>
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