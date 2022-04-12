import React, { useState, useEffect } from 'react';
import BarChart1 from "./BarChart1";
import PieChart1 from "./PieChart1";
import PieChart2 from "./PieChart2";
import { QueryOneBar, QueryOneSuspect, QueryOneVictim } from "../../Data";



function Query1() {
    const[ageData, setAgeData] = useState([]);
    const[victimData, setVictimData] = useState([]);
    const[suspectData, setSuspectData] = useState([]);

    const[fromYearAge, setFromYear] = useState(2013);
    const[toYearAge, setToYear] = useState(2018);

    const[fromSusYearAge, setFromSusYear] = useState(2013);
    const[toSusYearAge, setToSusYear] = useState(2018);
    
    // Default state for bar chart
    const [barOne, setBarOne] = useState({
        labels: ['0-14 Years', '15 - 25 Years', '26+ Years'],
        datasets: [
          {
            label: "Dead",
            data: ageData.map((data) => data.killed),
            backgroundColor: [
              "#FEBA55",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
          {
            label: "Unharmed",
            data: ageData.map((data) => data.unharmed),
            backgroundColor: [
              "#6D9C9F",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
          {
            label: "Arrested",
            data: ageData.map((data) => data.arrested),
            backgroundColor: [
              "#EB4A51",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      });
      
    const [pieOne, setPieOne] = useState({
      labels: ['0-14 Years', '15 - 25 Years', '26+ Years'],
      datasets: [
        {
          label: "Amount",
          data: suspectData,
          backgroundColor: [
            "#FEBA55",
            "#6D9C9F",
            "#EB4A51",
            "#335C67",
          ],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    });

    const [pieTwo, setPieTwo] = useState({
      labels: ['0-14 Years', '15 - 25 Years', '26+ Years'],
      datasets: [
        {
          label: "Amount",
          data: victimData,
          backgroundColor: [
            "#FEBA55",
            "#6D9C9F",
            "#EB4A51",
            "#335C67",
          ],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    });

    // Updates Bar chart on API call
    useEffect(() => {
      setBarOne({
        labels: ['0-14 Years', '15 - 25 Years', '26+ Years'],
        datasets: [
          {
            label: "Dead",
            data: ageData.map((data) => data.killed),
            backgroundColor: [
              "#FEBA55",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
          {
            label: "Unharmed",
            data: ageData.map((data) => data.unharmed),
            backgroundColor: [
              "#6D9C9F",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
          {
            label: "Arrested",
            data: ageData.map((data) => data.arrested),
            backgroundColor: [
              "#EB4A51",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      });
    }, [ageData]);

    // Updates Pie charts on API call
    useEffect(() => {
      console.log("TST", suspectData)
      setPieOne({
        labels: ['0-14 Years', '15 - 25 Years', '26+ Years'],
        datasets: [
          {
            label: "Amount",
            data: suspectData,
            backgroundColor: [
              "#FEBA55",
              "#6D9C9F",
              "#EB4A51",
              "#335C67",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      });

      setPieTwo({
        labels: ['0-14 Years', '15 - 25 Years', '26+ Years'],
        datasets: [
          {
            label: "Amount",
            data: victimData,
            backgroundColor: [
              "#FEBA55",
              "#6D9C9F",
              "#EB4A51",
              "#335C67",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      });
    }, [suspectData, victimData]);

    // Async method to get initial ageData 
    useEffect(() => {
      
      const fetchData = async () => {
        try{
          
          fetch(`http://127.0.0.1:8000/api/query1/0/14/15/25/26/100/1/${fromYearAge}/12/${toYearAge}/`)
            .then(res => res.json())
            .then(json => {
              setAgeData(json);
            
          })

        } catch(error) {
          console.log("error: ", error);
        }

      }
      
      fetchData();
    }, [fromYearAge, toYearAge]) 

    // Async method to get initial suspectData
    useEffect(() => {
      const delay = ms => new Promise(res => setTimeout(res, ms));
      const getData = async () => {
        
        let tempSusData = []
        let tempVicData = []
        // Fetch Suspect data with API call
        fetch(`http://127.0.0.1:8000/api/query6/0/14/Subject-Suspect/1/${fromSusYearAge}/12/${toSusYearAge}`)
          .then(res => res.json())
          .then(json => {
            tempSusData[0] = json.count;
            
        });
        fetch(`http://127.0.0.1:8000/api/query6/15/25/Subject-Suspect/1/${fromSusYearAge}/12/${toSusYearAge}`)
          .then(res => res.json())
          .then(json => {
            tempSusData[1] = json.count;
            
        });
        fetch(`http://127.0.0.1:8000/api/query6/25/100/Subject-Suspect/1/${fromSusYearAge}/12/${toSusYearAge}`)
          .then(res => res.json())
          .then(json => {
            tempSusData[2] = json.count;
            
        });
        
        // Fetch Victim Data with API call
        fetch(`http://127.0.0.1:8000/api/query6/0/14/Victim/1/${fromSusYearAge}/12/${toSusYearAge}`)
          .then(res => res.json())
          .then(json => {
            tempVicData[0] = json.count;
            
        });
        fetch(`http://127.0.0.1:8000/api/query6/15/25/Victim/1/${fromSusYearAge}/12/${toSusYearAge}`)
          .then(res => res.json())
          .then(json => {
            tempVicData[1] = json.count;
            
        });
        fetch(`http://127.0.0.1:8000/api/query6/25/100/Victim/1/${fromSusYearAge}/12/${toSusYearAge}`)
          .then(res => res.json())
          .then(json => {
            tempVicData[2] = json.count;
            
        });
        
        await delay(3000);

        setSuspectData(tempSusData);
        setVictimData(tempVicData);
      }
      
      getData();
    }, [fromSusYearAge, toSusYearAge])


      // Dropdown
      const handleFromAgeSelect=(event)=>{  
        setFromYear(event.target.value);
      }

      const handleToAgeSelect=(event)=>{
        setToYear(event.target.value);
      }

      const handleFromSusSelect=(event)=>{  
        setFromSusYear(event.target.value);
      }

      const handleToSusSelect=(event)=>{
        setToSusYear(event.target.value);
      }

    return (
        <div className="main-container">
          <div className="chart-container-1">
            <h2>Age Group Proportions</h2>
            
            <BarChart1 chartData={barOne}/>

            {/* Toggle date ranges */}
            
            <select onChange={handleFromAgeSelect}>
              <option disabled>From</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
            </select>

            <select onChange={handleToAgeSelect} defaultValue = "2018">
              <option disabled>To</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
            </select>
            
          </div>
          <div className="chart-container-2">
            <h2>Suspect</h2>
            <PieChart1 chartData={pieOne} 
            />
          </div>
          <div className="chart-container-3">
            <h2>Victim</h2>
            <PieChart2 chartData={pieTwo} />
            <select onChange={handleFromSusSelect}>
              <option disabled>From</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
            </select>

            <select onChange={handleToSusSelect} defaultValue = "2018">
              <option disabled>To</option>
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

export default Query1;