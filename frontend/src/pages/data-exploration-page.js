import React from 'react'
import "./data-exploration.css";
import Query1 from "../components/Query1/Query1";
import Query2 from "../components/Query2/Query2";
import Query3 from "../components/Query3/Query3";
import Query4 from '../components/Query4/Query4';


function DataExplorationPage() {

  return (
    <div className="App">
      <h1>Query 1</h1>
      <p>Skylar put descriptions here</p>
      <div><Query1 /></div>
      
      <h1>Query 2 and 5</h1>
      <p>Skylar put descriptions here</p>
      <div><Query2 /></div>

      <h1>Query 3</h1>
      <p>Skylar put descriptions here</p>
      <div><Query3 /></div>

      <h1>Query 4</h1>
      <p>Skylar put descriptions here</p>
      <div><Query4 /></div>

    </div>  
  );
}

export default DataExplorationPage;