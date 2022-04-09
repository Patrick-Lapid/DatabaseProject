import React, { useState, useEffect } from 'react';
import PieChart1 from "./PieChart1";
import { QueryOneSuspect } from '../../Data';

function Query3() {

  const[maleData, setMaleData] = useState([]);
  const[femaleData, setFemaleData] = useState([]);
  const[totalData, setTotalData] = useState([]);
  
  const[fromYear, setFromYear] = useState(2013);
  const[toYear, setToYear] = useState(2018);

  const [pieOne, setPieOne] = useState({
    labels: ['Female Victims', 'Male Victims'],
    datasets: [
      {
        labels: "Amount",
        data: QueryOneSuspect.map((data) => data.value),
        backgroundColor: [
          "#9E2A2B",
          "#335C67",
          "#E09F3E",
          "#589E27",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  const [pieTwo, setPieTwo] = useState({
    labels: ['Female Victims', 'Male Victims'],
    datasets: [
      {
        label: "Amount",
        data: QueryOneSuspect.map((data) => data.value),
        backgroundColor: [
          "#9E2A2B",
          "#335C67",
          "#E09F3E",
          "#589E27",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  const [pieThree, setPieThree] = useState({
    labels: ['Female Victims', 'Male Victims'],
    datasets: [
      {
        label: "Amount",
        data: QueryOneSuspect.map((data) => data.value),
        backgroundColor: [
          "#9E2A2B",
          "#335C67",
          "#E09F3E",
          "#589E27",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  // Updates Chart 1 on API call
  useEffect(() => {
    console.log("CHART 1:", totalData)
    setPieOne({
      labels: ['Female Victims', 'Male Victims'],
      datasets: [
        {
          labels: "Amount",
          data: QueryOneSuspect.map((data) => data.value), // fix this
          backgroundColor: [
            "#9E2A2B",
            "#335C67",
            "#E09F3E",
            "#589E27",
          ],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    })
  }, [totalData]);
  // Updates Chart 2 on API call
  useEffect(() => {
    setPieTwo({
      labels: ['Female Victims', 'Male Victims'],
      datasets: [
        {
          label: "Amount",
          data: QueryOneSuspect.map((data) => data.value), // Change this
          backgroundColor: [
            "#9E2A2B",
            "#335C67",
            "#E09F3E",
            "#589E27",
          ],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    })
  }, [maleData]);

  // Updates Chart 3 on API call
  useEffect(() => {
    setPieThree({
      labels: ['Female Victims', 'Male Victims'],
      datasets: [
        {
          label: "Amount",
          data: QueryOneSuspect.map((data) => data.value), // change to femaleData.
          backgroundColor: [
            "#9E2A2B",
            "#335C67",
            "#E09F3E",
            "#589E27",
          ],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    })
  }, [femaleData]);
  
  // Calls API on change of year values
  useEffect(() => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const getData = async () => {
      
      // Fetch Suspect data with API call
      fetch(`http://127.0.0.1:8000/api/query3/${fromYear}/${toYear}/male/`)
        .then(res => res.json())
        .then(json => {
          setMaleData(json);
      });
      fetch(`http://127.0.0.1:8000/api/query3/${fromYear}/${toYear}/female/`)
        .then(res => res.json())
        .then(json => {
          setFemaleData(json);
      });
      fetch(`http://127.0.0.1:8000/api/query3/${fromYear}/${toYear}/female/`)
        .then(res => res.json())
        .then(json => {
          setTotalData(json);   
      });
    }
    
    getData();
  }, [fromYear, toYear]);

  const handleFromSelect=(event)=>{
    setFromYear(event.target.value);
  }

  const handleToSelect=(event)=>{
    setToYear(event.target.value);
  }

  return (
    <div>
      <div className="main-container">
        <div className='chart-container-center'>
          <h1>Percent of Female Victims vs Male Victims</h1>
          <PieChart1 chartData={pieOne} />
        </div>
      </div>
      <div className="main-container">
        <div className='chart-container-1'>
          <h1>Percent of Victims (by gender) Shot by Males</h1>
          <PieChart1 chartData={pieTwo} />
        </div>
        <div className='chart-container-2'>
          <h1>Percent of Victims (by gender) Shot by Females</h1>
          <PieChart1 chartData={pieThree} />
        </div>
      </div>
      <select onChange={handleFromSelect}>
        <option disabled>From</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
      </select>

      <select onChange={handleToSelect} defaultValue = "2018">
        <option disabled>To</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
      </select>
    </div>
  )
}

export default Query3;