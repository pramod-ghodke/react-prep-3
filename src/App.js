import './App.css';
import React from 'react';
import Parent from './Usestate/Parent';
import Usereducer from './Usereducer';
import UseMemo from './UseMemo'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
     <Parent/>
      <Usereducer/>
      <UseMemo/>
    </div>
  );
}

export default App;
