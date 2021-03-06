import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const options = {
    scales: {
      y: {
        display: true,
        title: {
          display: true, 
          text: 'Proportion of People Involved in Gun Incident'
        }
      }
    }
  };

function BarChart1({ chartData }) {
  return <Bar 
    data={chartData} 
    options={options}
    />;
}

export default BarChart1;