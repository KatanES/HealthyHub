import { getDate, parseISO } from 'date-fns';
import { Line } from 'react-chartjs-2';

import { avarageValue } from '../../../../utils/Dashboard/AvarageValue';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, PointElement);

const Calories = ({ name, data: dataCalories, period }) => {
  if (!dataCalories) {
    return;
  }

  const lables = dataCalories.map(({ date }) => {
    if (period.value === 'lastYear') {
      return date.substring(0, 3);
    }
    return getDate(parseISO(date));
  });

  const caloriesData = dataCalories.map(({ value }) => value);

  const titleTooltip = (tooltipItems) => {
    return '';
  };

  const data = {
    labels: lables,

    datasets: [
      {
        data: caloriesData,
        tension: 0.1,
        borderColor: 'rgba(227, 255, 168, 1)',
        backgroundColor: 'rgba(227, 255, 168, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    layout: {
      padding: {
        left: 14,
        right: 31,
        top: 25,
        bottom: 24,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        shadowColor: 'rgba(231, 219, 219, 0.5)',

        yAlign: false,
        displayColors: false,
        cornerRadius: 8,
        backgroundColor: '#0F0F0F',
        titleColor: '#FFF',
        bodyAlign: 'center',
        footerAlign: 'center',
        shadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
        bodyFont: {
          size: 32,
          weight: 'bold',
          family: 'Poppins',
          lineHeight: 1.19,
          style: 'normal',
        },
        caretSize: 0,
        footerFont: {
          size: 14,
          weight: 'normal',
          family: 'Poppins',
          lineHeight: 1.43,
          style: 'normal',
        },
        footerColor: '#B6B6B6',
        callbacks: {
          title: titleTooltip,
          footer: function (context) {
            return 'milliliters';
          },
        },
      },
    },
    pointRadius: 0,
    scales: {
      y: {
        color: '#B6B6B6',
        min: 0,
        max: 3000,
        ticks: {
          padding: 8,
          stepSize: 1000,
          callback: (value) => {
            if (value !== 0) {
              return value / 1000 + 'K';
            }
            if (value === 0) {
              return value;
            }
          },
        },
        grid: {
          lineWidth: 0.5,
          color: 'rgba(182, 182, 182, 1)',
          drawTicks: false,
        },
      },
      x: {
        stacked: true,
        beginAtZero: false,
        color: '#B6B6B6',
        ticks: {
          padding: 6,
        },

        grid: {
          lineWidth: 0.5,
          color: 'rgba(182, 182, 182, 1)',
          drawTicks: false,
        },
        min: 0,
        max: 31,
      },
    },
  };

  return (
    <>
      <div>
        <div>
          <h1>{name}</h1>
          <p>
            Avarage value:<Value>{avarageValue(dataCalories)} cal</Value>
          </p>
        </div>
        <div>
          <div>
            {dataCalories.length ? (
              <Line data={data} options={options}></Line>
            ) : (
              <p> Created by HealthyHub🍎Team</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calories;
