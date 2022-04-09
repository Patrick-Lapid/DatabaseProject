import React, { useState, useEffect } from 'react';
import BubbleChart from "./ScatterChart1";

import { QueryTwoScatter } from "../../Data";


function Query2() {
    const [stateData, setStateData] = useState([]);
    const [year, setYear] = useState(2018);

    const [options, setOptions] = useState({
      plugins: {
        legend: {
          display: false
        }
      }
    });

    const [Bubble, setBubble] = useState({
        datasets: [
          {
            label: "States",
            // Income = x, Incidents = y,
            data: [],
            backgroundColor: [
              "#335C67",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
    });
    
    useEffect(()=>{
      console.log(stateData.map((data) => data.numIncidents))
      let scatterPoints = []
      stateData.forEach( i=> {
        let numIncidents = parseInt(i.numIncidents)
        let medianIncome = parseInt(i.medianIncome)
        let state = i.state
        scatterPoints.push({
          label: state,
          data:[{ "x": numIncidents, "y": medianIncome}],
          backgroundColor: [
            "#9E2A2A",
          ],
          borderColor: "black",
          borderWidth: 0.5,
        })
        
      })
      
      setBubble({
        datasets: scatterPoints,
        
      })
    },[stateData])

    // API call based on year
    useEffect(() => {
      const getData = async () => {
      
        // Fetch Suspect data with API call
        fetch(`http://127.0.0.1:8000/api/query2/${year}/`)
          .then(res => res.json())
          .then(json => {
            setStateData(json);
            console.log(json)
        });
      }
      
      getData();
    }, [year]);

    const handleYearSelect = (event) => {
      setYear(event.target.value);
    }

    return (
        <div className="main-container">
            <div className="chart-container-4">
                <h2>Incidents vs Income per Capita</h2>
                <BubbleChart chartData={Bubble} options = {options} />
                <select onChange={handleYearSelect}>
                  <option disabled>From</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                </select>
            </div>
            <div className='chart-container-5'>
              <h2>Put map info in this div</h2>
            </div>
            
      </div>
    )
}

export default Query2