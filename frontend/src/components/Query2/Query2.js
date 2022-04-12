import React, { useState, useEffect } from 'react';
import BubbleChart from "./ScatterChart1";
import Map2014 from './maps/query5-2014.png';
import Map2015 from './maps/query5-2015.png';
import Map2016 from './maps/query5-2016.png';
import Map2017 from './maps/query5-2017.png';
import Map2018 from './maps/query5-2018.png';
import Spinner from './maps/Loading_icon.gif';


function Query2() {
    const [stateData, setStateData] = useState([]);
    const [year, setYear] = useState(2014);
    const [map, setMap] = useState(2014);
    const [isLoading, setIsLoading] = useState(true);
    const [imgSrc, setSrc] = useState(Map2018);

    const [Bubble, setBubble] = useState({
        datasets: [
          {
            label: "States",
            // Income = x, Incidents = y,
            data: [],
            backgroundColor: [
              "#FF0000",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
    });
    
    useEffect(()=>{
      
      let scatterPoints = []
      stateData.forEach( i=> {
        let numIncidents = parseInt(i.numIncidents)
        let medianIncome = parseInt(i.medianIncome)
        let state = i.state
        scatterPoints.push({
          label: state,
          data:[{ "x": numIncidents, "y": medianIncome}],
          backgroundColor: ["#FF0000"],
          borderColor: "#FFC0CB",
          borderWidth: 0.5,
        })
        
      })
      
      setBubble({
        datasets: scatterPoints,
        
      })
    },[stateData])

    useEffect(() => {
      const delay = ms => new Promise(res => setTimeout(res, ms));
      setIsLoading(true);
      console.log(map)
      switch(map){
        case "2014":
          setSrc(Map2014);
          break;
        case "2015":
          setSrc(Map2015);
          break;
        case "2016":
          setSrc(Map2016);
          break;
        case "2017":
          setSrc(Map2017);
          break;
        case "2017":
          setSrc(Map2018);
          break;  
      }
      
      const getMap = async () => {
        await delay(700);
        setIsLoading(false);
      }
      getMap();
    }, [map])    

    // API call based on year
    useEffect(() => {
      const getData = async () => {
      
        // Fetch Suspect data with API call
        fetch(`http://127.0.0.1:8000/api/query2/${year}/`)
          .then(res => res.json())
          .then(json => {
            setStateData(json);
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

            <div className='chart-container-5'>
                <h2>Gun Violence by State</h2>
                <div className='mapImage'> 
                  {isLoading && <img src={Spinner}></img>}
                  {!isLoading && <img src={imgSrc} key={imgSrc}></img>}
                </div>
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