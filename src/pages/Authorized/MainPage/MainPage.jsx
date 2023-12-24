import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Diary from '../../../components/AuthorizedUser/MainPage/Diary/Diary';
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

import { DailyGoalInfo } from './DailyGoal/DailyGoal';
import { RecommendedFood } from './RecommendedFood/RecommendedFood';
import { fetchRecommendedFood } from '../../../redux/recommendedFood/operations.js';
import { getRecommendedFood } from '../../../redux/recommendedFood/selectors';

// import { getCaloriesGoal } from '../../../redux/dailyGoalsCalories/selectors';

//

const MainPage = () => {
  // const dailyCalories = useSelector(getCaloriesGoal);
  const recomendFood = useSelector(getRecommendedFood);
  const dispatch = useDispatch();

  useEffect(() => {
    !recomendFood && dispatch(fetchRecommendedFood());
  }, [dispatch, recomendFood]);
  const dailyCalories = 2500; //чисто замінити пустоту, треба зробити частину редаксу
  return (
    <Container>
      <DailyGoalInfo dailyCalories={dailyCalories} />
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
