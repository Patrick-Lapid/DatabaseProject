import React from 'react'
import { useState } from "react";
import "./data-exploration.css";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import { QueryOneBar, QueryOneSuspect, QueryOneVictim } from "../Data";

function DataExplorationPage() {
    const [barOne, setBarOne] = useState({
        labels: QueryOneBar.map((data) => data.age),
        datasets: [
          {
            label: "Dead",
            data: QueryOneBar.map((data) => data.dead),
            backgroundColor: [
              "#9E2A2B",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
          {
            label: "Unharmed",
            data: QueryOneBar.map((data) => data.unharmed),
            backgroundColor: [
              "#335C67",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
          {
            label: "Arrested",
            data: QueryOneBar.map((data) => data.arrested),
            backgroundColor: [
              "#E09F3E",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      });
    
      const [pieOne, setPieOne] = useState({
        labels: QueryOneSuspect.map((data) => data.age),
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
    
      const [pieTwo, setPieTwo] = useState({
        labels: QueryOneVictim.map((data) => data.age),
        datasets: [
          {
            label: "Amount",
            data: QueryOneVictim.map((data) => data.value),
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
    
      return (
            <div className="App">
            <h1>Query 1</h1>
            <div className="main-container">
                <div className="chart-container-1">
                <h2>Age Group Proportions</h2>
                <BarChart chartData={barOne} />
                </div>
                <div className="chart-container-2">
                <h2>Suspect</h2>
                <PieChart chartData={pieOne} />
                </div>
                <div className="chart-container-3">
                <h2>Victim</h2>
                <PieChart chartData={pieTwo} />
                </div>
            </div>
            </div>
        
      );
}

export default DataExplorationPage;