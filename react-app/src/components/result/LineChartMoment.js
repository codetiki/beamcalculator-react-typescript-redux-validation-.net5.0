import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChartMoment() {
  // Nyt tulokset tulee Redixin kautta
  const moments = useSelector((state) => state.moment.moment);
  return <Line data={moments} options={moments.options} />;
}

export default LineChartMoment;
