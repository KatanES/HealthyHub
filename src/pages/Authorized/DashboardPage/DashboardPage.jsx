import { Container, CaloriesGraph, WaterGraph } from './DashboardPage.styled';
import DashBoard from '../../../components/AuthorizedUser/DashboardPage/DashboardPage';
// import Date from '../../components/Date/Date';
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

const labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top', // Розміщення у верхній частині
      align: 'start', // Вирівнювання в початковій (лівий) частині
      anchor: 'start', // Як якір для вирівнювання
    },
    labels: {
      boxWidth: 0, // Ширина боксу для кожного елементу в легенді
    },
    // title: {
    //   display: true,
    //   text: '',
    // },
  },
  scales: {
    x: {
      lineWidth: 0.5,
      grid: {
        color: '#b6b6b6',
      },

      min: 0,
      max: 31,
    },
    y: {
      grid: { color: '#b6b6b6' },

      min: 0,
      max: 3000,
      ticks: {
        stepSize: 1000,
      },
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: 'Calories',

      data: [
        1700, 1750, 1650, 1700, 1700, 1650, 1700, 1750, 1650, 1700, 1700, 1650,
        1700, 1750, 1650, 1700, 1700, 1650, 1700, 1750, 1650, 1700, 1700, 1650,
        1700, 1750, 1650, 1700, 1700, 1650,
      ],
      lineTension: 0.3,
      borderColor: '#E3FFA8',
      backgroundColor: 'rgba(183, 5, 35, 0.5)',
    },
  ],
};

const data1 = {
  labels,
  datasets: [
    {
      label: 'Water',
      data: [
        1700, 1750, 1650, 1700, 1700, 1650, 1700, 1750, 1650, 1700, 1700, 1650,
        1700, 1750, 1650, 1700, 1700, 1650, 1700, 1750, 1650, 1700, 1700, 1650,
        1700, 1750, 1650, 1700, 1700, 1650,
      ],
      lineTension: 0.3,
      borderColor: '#E3FFA8',
      // backgroundColor: 'rgba(5, 183, 32, 0.5)',
    },
  ],
};

const DashboardPage = () => {
  return (
    <Container>
      {/* <Date /> */}
      <CaloriesGraph>
        <DashBoard options={options} data={data} />
      </CaloriesGraph>
      <WaterGraph>
        <DashBoard options={options} data={data1} />
      </WaterGraph>
    </Container>
  );
};

export default DashboardPage;

// const DashboardPage = () => {
//   return (
//     <div>
//       <h1>DashboardPage Page!</h1>
//     </div>
//   );
// };

// export default DashboardPage;
