import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Calories } from './Calories/Calories';
import { Water } from './Water/Water';
import { Weight } from './Weight/Weight';
import { SelectPeriod } from './GetPeriod/GetPeriod';

import { fetchStatistics } from '../../../redux/statistic/operations';

const DashboardPage = () => {
  const [data, setData] = useState({ value: 'lastMonth', label: 'Last Month' });

  const statistics = useSelector((state) => state.statistics.statistics);

  const waterData = statistics?.water[data.value];
  const caloriesData = statistics?.calories[data.value];
  const weightData = statistics?.weight[data.value];

  const dispatch = useDispatch();

  const onChange = (dat) => {
    setData(dat);
  };

  useEffect(() => {
    if (!statistics) {
      dispatch(fetchStatistics());
    }
  }, [dispatch, statistics]);

  return (
    <>
      <div>
        <p onChange={onChange} data={waterData} />
        <p>
          <div>
            <Calories name="Calories" data={caloriesData} period={data} />
          </div>
          <div>
            <Water name="Water" data={waterData} period={data} />
          </div>
        </p>
        <Weight name="Weight" data={weightData} period={data} />
      </div>
    </>
  );
};

export default DashboardPage;
