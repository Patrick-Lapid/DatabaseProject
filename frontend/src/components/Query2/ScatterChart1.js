import React from "react";
import { Bubble } from "react-chartjs-2";

const options = {
  plugins: {
    legend: {
      display: false
    },
  }
}

function BubbleChart({ chartData }) {
  return <Bubble data={chartData} options = {options}/>;
}

export default BubbleChart;