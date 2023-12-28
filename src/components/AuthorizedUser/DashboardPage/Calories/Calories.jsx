import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import {
  Container,
  TitleContainer,
  CaloriesTitle,
  CaloriesDesc,
  ChartsContainer,
} from './Calories.styled';

import mockData from '../../../../assets/user.staticData/mock.json';

const CaloriesDash = ({ selectedMonth }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: false,
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: true,
          color: '#292928',
          borderColor: '#292928',
        },
      },
      y: {
        position: 'left',
        ticks: {
          beginAtZero: true,
          stepSize: 1000,
          callback: function (value) {
            if (value >= 1000) {
              return (value / 1000).toLocaleString() + 'K';
            }
            return value;
          },
        },
        grid: {
          display: true,
          color: '#292928',
          borderColor: '#292928',
        },
      },
    },
    layout: {
      padding: {
        left: 14,
        right: 31,
        top: 25,
        bottom: 40,
      },
    },
  };

  const caloriesForSelectedMonth = mockData.calories.filter((obj) => {
    // Assuming obj.date is a string in the format "YYYY-MM-DD"
    const objDate = new Date(obj.date);
    return objDate.getMonth() === selectedMonth.value;
  });

  const labels = [];
  caloriesForSelectedMonth.forEach((element) => {
    labels.push(Number(element.date.split('-')[2]));
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Calories',
        data: caloriesForSelectedMonth.map((element) => element.value),
        borderColor: '#e3ffa8',
        backgroundColor: '#0F0F0F',
        pointBackgroundColor: '#e3ffa8',
        borderWidth: 1,
      },
    ],
  };

  const average = caloriesAverage(caloriesForSelectedMonth);
  function caloriesAverage(arr) {
    let count = 0;
    let total = 0;
    arr.forEach((element) => {
      count++;
      total += element.value;
    });
    return (total / count).toFixed(0);
  }
  return (
    <Container>
      <TitleContainer>
        <CaloriesTitle>Calories</CaloriesTitle>
        <CaloriesDesc>Average value: {average} cal</CaloriesDesc>
      </TitleContainer>

      <ChartsContainer>
        <Line
          options={options}
          data={data}
          style={{ backgroundColor: '#0F0F0F', borderRadius: '12px' }}
        />
      </ChartsContainer>
    </Container>
  );
};

export default CaloriesDash;
