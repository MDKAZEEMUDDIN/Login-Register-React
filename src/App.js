import logo from './logo.svg';
import React from 'react';
import './App.css';
import Registration from './Components/Registration';
import ReactDOM from "react-dom";

function App() {
  return (   
    <div className="App">
      <div className='outer' >
        <div className='inner'> <Registration/>  
        </div>

      </div>
       
    </div>
  );
}
export default App;
