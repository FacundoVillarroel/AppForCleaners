import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"

import {db} from "../firebase/config";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [ usersList, setUsersList ] = useState([])
  const [ currentUser, setCurrentUser] = useState("");
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const usersListRef = collection( db, "usersList" );
    
    getDocs( usersListRef )
      .then( resp => {
        const usersListFirebase = resp.docs.map((doc) => ({id:doc.id, ...doc.data()}))
        setUsersList(usersListFirebase)
      })
      .finally( () => {
        setLoading(false)
      })
  },[])


  return (
    <>
      {
        loading 
          ? <h1 className="text-center"> Loading...</h1> 
          : <UserContext.Provider value = {{
              usersList,
              setUsersList,
              currentUser,
              setCurrentUser,
            }}>
              {children}
            </UserContext.Provider>
      }
    </>
  )

}