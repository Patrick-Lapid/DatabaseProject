import React from 'react'
import "./data-exploration.css";
import Query1 from "../components/Query1/Query1";
import Query2 from "../components/Query2/Query2";
import Query3 from "../components/Query3/Query3";


function DataExplorationPage() {

  return (
    <div className="App">
      <h1>Query 1</h1>
      <div><Query1 /></div>
      
      <h1>Query 2, 4, and 5</h1>
      <div><Query2 /></div>

      <h1>Query 3</h1>
      <div><Query3 /></div>
    </div>  
  );
}

export default DataExplorationPage;