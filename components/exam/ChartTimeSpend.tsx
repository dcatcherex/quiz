'use client'

import React from 'react'
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";



const ChartCategoryPerf = () => {
    const chartRef = useRef(null);

    useEffect(() => {
      if (chartRef && chartRef.current) {
        const lineChart = new Chart(chartRef.current, {
          type: "bar",
          data: {
            labels: ["1", "2", "3", "4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],
            datasets: [
              {
                label: "Seconds",
                data: [10, 15, 12, 14, 15, 10, 14, 13, 10, 12,10, 15, 12, 14, 15, 10, 14, 13, 10, 12],
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderColor: "rgb(255, 99, 132)",
              }
            ],
            borderWidth: 1
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
        });
      }
    }, []);

    return <canvas ref={chartRef} />;
}

export default ChartCategoryPerf