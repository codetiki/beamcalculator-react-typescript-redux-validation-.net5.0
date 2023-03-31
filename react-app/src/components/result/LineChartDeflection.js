import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChartDeflection() {
  const deflections = useSelector((state) => state.deflection.deflection);
  return <Line data={deflections} options={deflections.options} />;
}

export default LineChartDeflection;
