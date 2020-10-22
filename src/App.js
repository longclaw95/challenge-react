import React from 'react';

import {UsersData} from './UsersData'

import './App.css';
import UserCard from './components/UserCard';

function App() {
  
  return (
    <div className="App">

      

      {UsersData.map((el) => (
        <UserCard el={UsersData} key={el.id} />
      ))}

    </div>
  );
}

export default App;
