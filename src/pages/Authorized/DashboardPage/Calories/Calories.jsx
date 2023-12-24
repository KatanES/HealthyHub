import {
  GraphContainer,
  GraphicHeader,
  GraphicTitle,
  Avarage,
  ScrollWrap,
  GraphicBody,
} from '../DashboardPage.styled';
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

const labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

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
      //   callbacks: {
      //     title: titleTooltip,
      //     footer: function (context) {
      //       return 'milliliters';
      //     },
      //   },
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

const data = {
  labels,

  datasets: [
    {
      data: [
        1700, 1750, 1650, 1700, 1700, 1650, 1700, 1750, 1650, 1700, 1700, 1650,
        1700, 1750, 1650, 1700, 1700, 1650, 1700, 1750, 1650, 1700, 1700, 1650,
        1700, 1750, 1650, 1700, 1700, 1650,
      ],
      tension: 0.1,
      borderColor: 'rgba(227, 255, 168, 1)',
      backgroundColor: 'rgba(227, 255, 168, 1)',
      borderWidth: 1,
    },
  ],
};

const Calories = () => {
  return (
    <GraphContainer>
      <GraphicHeader>
        <GraphicTitle>Calories</GraphicTitle>
        <Avarage>Average value ... cal</Avarage>
      </GraphicHeader>
      <ScrollWrap>
        <GraphicBody>
          <Line options={options} data={data} />
        </GraphicBody>
      </ScrollWrap>
    </GraphContainer>
  );
};

export default Calories;
