"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const ChartRadar = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const radarChart = new Chart(chartRef.current, {
        type: "radar",
        data: {
          labels: ["Reading", "Listening", "Speaking", "Writing"],
          datasets: [
            {
              label: "Your Skill",
              data: [60, 50, 60, 70],
              fill: true,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              pointBackgroundColor: "rgb(255, 99, 132)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(255, 99, 132)",
            },
            {
              label: "Recommendation",
              data: [90, 70, 80, 80],
              fill: true,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgb(54, 162, 235)",
              pointBackgroundColor: "rgb(54, 162, 235)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(54, 162, 235)",
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                    stepSize: 20
                }
            }
          },
          
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: false,
              text: "Radar Chart",
            },
              
            
          },
        },
      });
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartRadar;
