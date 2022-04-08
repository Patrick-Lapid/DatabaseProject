import React, { useState } from 'react';
import ScatterChart1 from "./ScatterChart1";
import { QueryTwoScatter } from "../../Data";

function Query2() {
    const [ScatterTwo, setScatterTwo] = useState({
        datasets: [
          {
            label: "States",
            // Income = x, Incidents = y,
            data: [
              {
                  x: 46963,
                  y: 4000,
              },
              {
                  x: 55470,
                  y: 200,
              },
              {
                  x: 45193,
                  y: 7000,
              },
              {
                  x: 47765,
                  y: 2000,
              },
            ], 
            backgroundColor: [
              "#335C67",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      });

    return (
        <div className="main-container">
            <div className="chart-container-4">
                <h2>Incidents vs Income per Capita</h2>
                <ScatterChart1 chartData={ScatterTwo} />
            </div>
            <div className="chart-container-5">
                <h2>Gun Violence by State</h2>
                {/* <img src={us} alt='us svg' /> */}
            </div>
      </div>
    )
}

export default Query2