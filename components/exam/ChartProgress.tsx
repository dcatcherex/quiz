'use client'

import React from 'react'
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const Utils = {
  months: function({count}) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames.slice(0, count);
  }
};

const ChartProgress = () => {
    const chartRef = useRef(null);

    useEffect(() => {
      if (chartRef && chartRef.current) {
        const labels = Utils.months({count: 3});
        const lineChart = new Chart(chartRef.current, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Progress',
                data: [40, 60, 70],
                fill: true,
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 
                  'rgba(54, 162, 235,0.5)',
                 
                tension: 0.1
                
              }
              
            ],
          }
        });
      }
    }, []);

    return <canvas ref={chartRef} />;
}

export default ChartProgress