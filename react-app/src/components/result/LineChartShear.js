import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChartShear() {
  const shears = useSelector((state) => state.shear.shear);
  return <Line data={shears} options={shears.options} />;
}

export default LineChartShear;
