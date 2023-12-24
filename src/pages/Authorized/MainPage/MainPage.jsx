import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { WaterInfo } from './WaterInfo/WaterInfo.jsx';
import { FoodInfo } from './FoodInfo/FoodInfo.jsx';
import { DailyGoalInfo } from './DailyGoal/DailyGoal';
import Diary from '../../../components/AuthorizedUser/MainPage/Diary/Diary';
import { RecommendedFood } from './RecommendedFood/RecommendedFood';

import symbol from '../../../assets/Welcome/symbol.svg';
import {
  Container,
  TitelPage,
  SVG,
  SectionDiary,
  Titel,
  TitelFlex,
  Text,
  DiaryAndRecommendFoodWrap,
} from './MainPage.styled';

import { getCaloriesGoal } from '../../../redux/dailyGoalsCalories/selectors.js';
import { getRecommendedFood } from '../../../redux/recommendedFood/selectors';
import { getWaterIntake } from '../../../redux/DailyWater/selectors.js';
// import { getFoodIntake } from '../../../redux/diary/selectors.js';
import { getFirstLoad } from '../../../redux/diary/selectors.js';

import { fetchRecommendedFood } from '../../../redux/recommendedFood/operations.js';
import { fetchCaloriesIntake } from '../../../redux/dailyGoalsCalories/operations.js';
import { fetchWaterIntake } from '../../../redux/DailyWater/operations.js';
import { fetchFoodIntake } from '../../../redux/diary/operations.js';

// import { getCaloriesGoal } from '../../../redux/dailyGoalsCalories/selectors';

//

const MainPage = () => {
  const dailyCalories = useSelector(getCaloriesGoal);
  const waterConsumtion = useSelector(getWaterIntake);
  const firstLoad = useSelector(getFirstLoad);
  const recomendFood = useSelector(getRecommendedFood);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstLoad) {
      dispatch(fetchFoodIntake());
    }
  }, [dispatch, firstLoad]);
  // const dailyCalories = 2500; //чисто замінити пустоту, треба зробити частину редаксу

  useEffect(() => {
    !dailyCalories && dispatch(fetchCaloriesIntake());
    !recomendFood && dispatch(fetchRecommendedFood());
    waterConsumtion === null && dispatch(fetchWaterIntake());
  }, [dispatch, dailyCalories, waterConsumtion, recomendFood]);
  return (
    <Container>
      <DailyGoalInfo dailyCalories={dailyCalories} />
      <WaterInfo
        // handleModal={toggleIsOpenModal}
        waterConsumtion={waterConsumtion}
      />
      <FoodInfo dailyCalories={dailyCalories} />
      <TitelPage>
        <Titel>Today</Titel>
        <Link to="/dashboard">
          <TitelFlex>
            <Text>On the way to the goal</Text>
            <SVG>
              <use href={symbol + '#icon-arrow-right'} />
            </SVG>
          </TitelFlex>
        </Link>
      </TitelPage>

      <DiaryAndRecommendFoodWrap>
        {' '}
        <SectionDiary>
          <Diary />
        </SectionDiary>
        <RecommendedFood />
      </DiaryAndRecommendFoodWrap>

      {/* <div>
        <h2>Recommended Food</h2>
        <Link to="/recommended-food">Recommended Food</Link>
      </div> */}
    </Container>
  );
};

export default MainPage;
