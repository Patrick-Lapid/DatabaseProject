import React, { useState, useEffect } from 'react';
import BubbleChart from "./ScatterChart1";
import Map2014 from './maps/query5-2014.png';
import Map2015 from './maps/query5-2015.png';
import Map2016 from './maps/query5-2016.png';
import Map2017 from './maps/query5-2017.png';
import Map2018 from './maps/query5-2018.png';
import { QueryTwoScatter } from "../../Data";


function Query2() {
    const [stateData, setStateData] = useState([]);
    const [year, setYear] = useState(2018);
    const [map, setMap] = useState(2014);
    const [isLoading, setIsLoading] = useState(false);
    const [src, setSrc] = useState(Map2014);

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
              "#000080",
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
            "#000080",
          ],
          borderColor: "black",
          borderWidth: 0.5,
        })
        
      })
      
      setBubble({
        datasets: scatterPoints,
        
      })
    },[stateData])

    useEffect(() => {
      setIsLoading(true);
      
      setIsLoading(false);
    }, [map])    

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



    const handleMapSelect = (event) => {
      setMap(event.target.value);
    }

    return (
        <div className="main-container">
            <div className="chart-container-4">
                <h2>Incidents vs Income per Capita</h2>
                <BubbleChart chartData={Bubble} />
                <select onChange={handleYearSelect}>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                </select>
            </div>
            <div className="chart-container-5">
              <h2>Gun Violence by State</h2>
              <img src={src}></img>
              <select onChange={handleMapSelect}>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                </select>
            </div>
      </div>
    )
}

export default Query2