import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';

import UsersContainer from './components/users/UsersContainer';
import CustomersContainer from "./components/customersContainer/CustomersContainer";
import NewCustomerForm from './components/newCustomer/NewCustomerForm';

function App() {

  const [currentUser, setCurrentUser] = useState("")

  const usersList = [
    {
      name:"Victoria",
      customers:[
        {
          name:"roberto",
          nextCleaning:"14/07  12:00hs",
          address: "direccion Falsa 1",
          hours:3,
          type:"helpling",
          frequency:"weekly"
        },
        {
          name:"andrea",
          nextCleaning:"15/07  12:00hs",
          address: "direccion Verdadera 2",
          hours:2,
          type:"particular",
          frequency:"biWeekly"
        },
        {
          name:"roberto",
          nextCleaning:"16/07  12:00hs",
          address: "Avenida siempre viva 3",
          hours:2.5,
          type:"particular",
          frequency:"once"
        },
      ]
    },
    {
      name:"Facundo",
      customers:[
        {
          name:"Yoseph",
          nextCleaning:"17/07  12:00hs",
          address: "direccionFalsa 1",
          hours:1,
          type:"helpling",
          frequency:"biWeekly"
        },
        {
          name:"Emiliano",
          nextCleaning:"18/07  12:00hs",
          address: "false Address 2",
          hours:2,
          type:"particular",
          frequency:"weekly"
        },
        {
          name:"roberto",
          nextCleaning:"19/07  12:00hs",
          address: "Avenida siempre viva 3",
          hours:6,
          type:"helpling",
          frequency:"once"
        },
      ]
    },
  ]
  
  return (
    <div className="container body">
      <h1 className='text-center pt-5 title'>USUARIOS</h1>
      <UsersContainer usersList={usersList} setCurrentUser={setCurrentUser}/>
      { currentUser && 
        <>
          <h1 className='text-center pt-5 mb-5 title'>AGREGAR NUEVO CLIENTE</h1>
          <NewCustomerForm/>          
          <h1 className='text-center pt-5 mb-5 title'>CLIENTES</h1>
          <CustomersContainer usersList={usersList} currentUser={currentUser}/>
        </>
      }
      { !currentUser && <h3 className='text-center py-5'>Debés seleccionar un usuario</h3>}
    </div>
  );
}

export default App;
