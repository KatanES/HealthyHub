import {
  Container,
  TitleContainer,
  WaterTitle,
  WaterDesc,
  ChartsContainer,
} from './Water.styled';

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

import mockData from '../../../../assets/user.staticData/mock.json';

const WaterDash = ({ selectedMonth }) => {
  console.log(mockData);
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

  const waterForSelectedMonth = mockData.water.filter((obj) => {
    // Assuming obj.date is a string in the format "YYYY-MM-DD"
    const objDate = new Date(obj.date);
    return objDate.getMonth() === selectedMonth.value;
  });
  console.log(waterForSelectedMonth);
  const labels = [];
  // const labels2 = [];
  waterForSelectedMonth.forEach((element) => {
    // console.log(element);
    // console.log(element.date.split('-'));
    labels.push(Number(element.date.split('-')[2]));
  });
  console.log(labels);
  const data = {
    labels,
    datasets: [
      {
        label: 'Water',
        data: waterForSelectedMonth.map((element) => element.value),
        borderColor: '#e3ffa8',
        backgroundColor: '#0F0F0F',
        pointBackgroundColor: '#e3ffa8',
        borderWidth: 1,
      },
    ],
  };
  const average = waterAverage(waterForSelectedMonth);
  function waterAverage(arr) {
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
        <WaterTitle>Water</WaterTitle>
        <WaterDesc>Average value: {average} ml</WaterDesc>
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

export default WaterDash;
