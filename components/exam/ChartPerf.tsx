'use client'

import React from 'react'
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";



const ChartPerf = () => {
    const chartRef = useRef(null);

    useEffect(() => {
      if (chartRef && chartRef.current) {
        const pieChart = new Chart(chartRef.current, {
          type: "pie",
          data: {
            labels: ["Correct", "Incorrect"],
            datasets: [
              {
                label: 'Performance',
                data: [80, 20],
                backgroundColor: [
                  'rgb(54, 162, 235)',
                  'rgb(255, 99, 132)',
                ],
                hoverOffset: 4
                
              }
              
            ],
          }
        });
      }
    }, []);

    return <canvas ref={chartRef} />;
}

export default ChartPerf