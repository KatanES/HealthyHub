import { Line } from 'react-chartjs-2';

const DashBoard = ({ options, data }) => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default DashBoard;
