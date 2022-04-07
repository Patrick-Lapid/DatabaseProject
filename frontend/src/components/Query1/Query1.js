import React, { useState } from 'react';
import BarChart1 from "./BarChart1";
import PieChart1 from "./PieChart1";
import PieChart2 from "./PieChart2";
import { QueryOneBar, QueryOneSuspect, QueryOneVictim } from "../../Data";


function Query1() {
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
        <div className="main-container">
          <div className="chart-container-1">
            <h2>Age Group Proportions</h2>
            <BarChart1 chartData={barOne} />
          </div>
          <div className="chart-container-2">
            <h2>Suspect</h2>
            <PieChart1 chartData={pieOne} />
          </div>
          <div className="chart-container-3">
            <h2>Victim</h2>
            <PieChart2 chartData={pieTwo} />
          </div>
      </div>
    )
}

export default Query1;