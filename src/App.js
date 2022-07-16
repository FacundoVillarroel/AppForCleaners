import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { UserProvider } from './context/UserContext';
import Body from './components/body/Body';

function App() {

  return (
    <UserProvider>
      <Body/>
    </UserProvider>
  );
}

export default App;
