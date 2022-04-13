import React, { useState, useEffect } from 'react';
import PieChart1 from "./PieChart1";
import { QueryOneSuspect } from '../../Data';
import BarChart2 from './BarChart2';

function Query3() {

  const[maleData, setMaleData] = useState([]);
  const[femaleData, setFemaleData] = useState([]);
  const[totalData, setTotalData] = useState([]);
  
  const[fromYear, setFromYear] = useState(2013);
  const[toYear, setToYear] = useState(2018);

  const [barTwo, setBarTwo] = useState({
    labels: ['Victims of Male Shooters', 'Victims of Female Shooters'],
    datasets: [
      {
        label: "Female",
        data: [0, 0],
        backgroundColor: [
          "#FEBA55",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Male",
        data: [0, 0],
        backgroundColor: [
          "#6D9C9F",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Unknown",
        data: [0, 0],
        backgroundColor: [
          "#EB4A51",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ]

  });

  const [pieOne, setPieOne] = useState({
    labels: ['Female Victims', 'Male Victims'],
    datasets: [
      {
        labels: "Amount",
        data: [],
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

  // const [pieTwo, setPieTwo] = useState({
  //   labels: ['Female Victims', 'Male Victims'],
  //   datasets: [
  //     {
  //       label: "Amount",
  //       data: [],
  //       backgroundColor: [
  //         "#335C67",
  //         "#FEBA55",
  //         "#6D9C9F",
  //         "#EB4A51",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 1,
  //     },
  //   ],
  // });

  // const [pieThree, setPieThree] = useState({
  //   labels: ['Female Victims', 'Male Victims'],
  //   datasets: [
  //     {
  //       label: "Amount",
  //       data: [],
  //       backgroundColor: [
  //         "#335C67",
  //         "#FEBA55",
  //         "#6D9C9F",
  //         "#EB4A51",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 1,
  //     },
  //   ],
  // });

  useEffect(() => {
    setBarTwo({
      labels: ['Victims of Male Shooters', 'Victims of Female Shooters'],
    datasets: [
      {
        label: "Female",
        data: [maleData.femaleVictimsRatio, femaleData.femaleVictimsRatio],
        backgroundColor: [
          "#FEBA55",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Male",
        data: [maleData.maleVictimsRatio, femaleData.maleVictimsRatio],
        backgroundColor: [
          "#6D9C9F",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Unknown",
        data: [maleData.unknownVictimsRatio, femaleData.unknownVictimsRatio],
        backgroundColor: [
          "#EB4A51",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ]
    })
  }, [maleData,femaleData]);

  // Updates Chart 1 on API call
  useEffect(() => {
    console.log("CHART 1:", totalData)
    setPieOne({
      labels: ['Female Victims', 'Male Victims', 'Unknown'],
      datasets: [
        {
          labels: "Amount",
          data: [totalData.femaleVictimsRatio*100, totalData.maleVictimsRatio*100, totalData.unknownVictimsRatio*100], // fix this
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
    })
  }, [totalData]);
  // Updates Chart 2 on API call
  // useEffect(() => {
  //   setPieTwo({
  //     labels: ['Female Victims', 'Male Victims', 'Unknown'],
  //     datasets: [
  //       {
  //         label: "Amount",
  //         data: [maleData.femaleVictimsRatio, maleData.maleVictimsRatio, maleData.unknownVictimsRatio ], // Change this
  //         backgroundColor: [
  //           "#335C67",
  //           "#335C67",
  //           "#E09F3E",
  //           "#589E27",
  //         ],
  //         borderColor: "black",
  //         borderWidth: 1,
  //       },
  //     ],
  //   })
  // }, [maleData]);

  // // Updates Chart 3 on API call
  // useEffect(() => {
  //   setPieThree({
  //     labels: ['Female Victims', 'Male Victims', 'Unknown'],
  //     datasets: [
  //       {
  //         label: "Amount",
  //         data: [femaleData.femaleVictimsRatio, femaleData.maleVictimsRatio, femaleData.unknownVictimsRatio ], // change to femaleData.
  //         backgroundColor: [
  //           "#335C67",
  //           "#335C67",
  //           "#E09F3E",
  //           "#589E27",
  //         ],
  //         borderColor: "black",
  //         borderWidth: 1,
  //       },
  //     ],
  //   })
  // }, [femaleData]);
  
  // Calls API on change of year values
  useEffect(() => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const getData = async () => {
      
      // Fetch Suspect data with API call
      fetch(`http://127.0.0.1:8000/api/query3/${fromYear}/${toYear}/Male/`)
        .then(res => res.json())
        .then(json => {
          setMaleData(json);
          console.log(json.shooterGender)
      });
      fetch(`http://127.0.0.1:8000/api/query3/${fromYear}/${toYear}/Female/`)
        .then(res => res.json())
        .then(json => {
          setFemaleData(json);
          console.log(json)
      });
      fetch(`http://127.0.0.1:8000/api/query3/${fromYear}/${toYear}/All/`)
        .then(res => res.json())
        .then(json => {
          setTotalData(json);   
          console.log(json)
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
        <div className='chart-container-3'>
          <h1>Overall Percent of Female Victims vs Male Victims</h1>
          <PieChart1 chartData={pieOne} />
        </div>
        <div className="chart-container-7">
        <h1>
          Proportions of Victims By Male and Female Shooters
        </h1>
        <BarChart2 chartData={barTwo}/>
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
    </div>
    </div>
  )
}

export default Query3;