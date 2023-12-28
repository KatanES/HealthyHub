import CaloriesDash from '../../../components/AuthorizedUser/DashboardPage/Calories/Calories';
import WaterDash from '../../../components/AuthorizedUser/DashboardPage/Water/Water';
import WeightDash from '../../../components/AuthorizedUser/DashboardPage/Weight/Weight';
import {
  getCurrentMonths,
  getLastYearMonths,
} from '../../../components/AuthorizedUser/DashboardPage/TimePeriod/GetMonth';
import { useState } from 'react';

import {
  DashboardContainer,
  WeightContainerStyle,
} from './DashboardPage.styled';
import MonthsDash from '../../../components/AuthorizedUser/DashboardPage/TimePeriod/Months';

const Dashboard = () => {
  const [month, setMonth] = useState({
    value: getCurrentMonths(),
    label: getLastYearMonths()[getCurrentMonths()],
  });

  const onChange = (newMonth) => {
    console.log(newMonth);
    setMonth(newMonth);
  };

  return (
    <div>
      <MonthsDash onChange={onChange} />
      <DashboardContainer>
        <CaloriesDash selectedMonth={month} />
        <WaterDash selectedMonth={month} />
      </DashboardContainer>
      <WeightContainerStyle>
        <WeightDash selectedMonth={month} />
      </WeightContainerStyle>
    </div>
  );
};

export default Dashboard;
