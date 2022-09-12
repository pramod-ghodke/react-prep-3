import React, { useState } from 'react';
import Child from "./Child";
import '../style.css';
import {Container} from 'react-bootstrap';

function Parent(){
   
  const[data, setData] = useState(" Send Data");

  const parentToChild = () =>{
     setData("this is data sending from parent to child");
     console.log("Sent successfully");
  }

  return(
    <Container>
    <div>
    <h1>What is UseState Hook ?(Implementation)</h1>
      <h3>Data transfer from Parent to Child</h3>
      <Child parentToChild={data}/>
      <button  className="btn-black mt-2" onClick={() =>parentToChild()}>Click Parent</button>
    </div>
    </Container>
  )
}

export default Parent;