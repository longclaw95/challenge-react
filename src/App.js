import React from 'react';
import {UsersData} from './UsersData'
import './App.css';

function App() {
  
  return (
    <div className="App">
      {UsersData.map((el) => (
        <UsersCard el={UsersData} key={el.id} />
      ))}
    </div>
  );
}

export default App;
