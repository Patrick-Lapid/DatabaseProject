import React from "react";
import { Bubble } from "react-chartjs-2";

const options = {
  plugins: {
    legend: {
      display: false
    },
  },
  scales: {
    y: {
      display: true,
      title: {
        display: true, 
        text: 'Number of Gun Violence Incidents'
      }
    },
    x: {
      display: true,
      title: {
        display: true,
        text: 'Average Per Capita Annual Income ($)'
      }
    }
}
}



function BubbleChart({ chartData }) {
  return <Bubble data={chartData} options = {options}/>;
}

export default BubbleChart;