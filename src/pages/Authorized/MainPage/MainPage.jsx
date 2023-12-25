import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { WaterInfo } from './WaterInfo/WaterInfo.jsx';
import { FoodInfo } from './FoodInfo/FoodInfo.jsx';
import { DailyGoalInfo } from './DailyGoal/DailyGoal';
import Diary from '../../../components/AuthorizedUser/MainPage/Diary/Diary';
import { RecommendedFood } from './RecommendedFood/RecommendedFood';
import { AddWaterIntakeModal } from '../../../components/AddWaterIntakeModal/AddWaterIntakeModal.jsx';

import symbol from '../../../assets/Welcome/symbol.svg';
import {
  ElementsWrapper,
  MainContainer,
  MainTitle,
  TitleWrapper,
  SVG,
  SectionDiary,
  TitelFlex,
  Text,
  DiaryAndRecommendFoodWrap,
} from './MainPage.styled';

import { getRecommendedFood } from '../../../redux/recommendedFood/selectors';
import { getWaterIntake } from '../../../redux/DailyWater/selectors.js';
import { getFirstLoad } from '../../../redux/diary/selectors.js';

import { fetchRecommendedFood } from '../../../redux/recommendedFood/operations.js';
import { fetchCaloriesIntake } from '../../../redux/dailyGoalsCalories/operations.js';
import { fetchWaterIntake } from '../../../redux/DailyWater/operations.js';
import { selectUser } from '../../../redux/auth/selectors.jsx';
import { fetchFoodIntake } from '../../../redux/diary/operations.js';

const MainPage = () => {
  const user = useSelector(selectUser);
  const dailyCalories = user.BMR;
  const dailyWaterIntake = user.rateWater * 1000;

  const waterConsumtion = useSelector(getWaterIntake);

  const firstLoad = useSelector(getFirstLoad);
  const recomendFood = useSelector(getRecommendedFood);
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleIsOpenModal = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  };

  useEffect(() => {
    if (!firstLoad) {
      dispatch(fetchFoodIntake());
    }
  }, [dispatch, firstLoad]);

  useEffect(() => {
    isOpenModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }, [isOpenModal]);

  useEffect(() => {
    !dailyCalories && dispatch(fetchCaloriesIntake());
    !recomendFood && dispatch(fetchRecommendedFood());
    waterConsumtion === null && dispatch(fetchWaterIntake());
  }, [dispatch, dailyCalories, waterConsumtion, recomendFood]);

  return (
    <MainContainer>
      <TitleWrapper>
        <MainTitle>Today</MainTitle>
        <Link to="/dashboard">
          <TitelFlex>
            <Text>On the way to the goal</Text>
            <SVG>
              <use href={symbol + '#icon-arrow-right'} />
            </SVG>
          </TitelFlex>
        </Link>
      </TitleWrapper>

      <ElementsWrapper>
        <DailyGoalInfo
          dailyCalories={dailyCalories}
          dailyWaterIntake={dailyWaterIntake}
        />
        <WaterInfo
          handleModal={toggleIsOpenModal}
          waterConsumtion={waterConsumtion}
          waterGoal={dailyWaterIntake}
        />
        <FoodInfo dailyCalories={dailyCalories} />
      </ElementsWrapper>

      <DiaryAndRecommendFoodWrap>
        <SectionDiary>
          <Diary />
        </SectionDiary>
        <RecommendedFood />
      </DiaryAndRecommendFoodWrap>

      {isOpenModal && <AddWaterIntakeModal handleModal={toggleIsOpenModal} />}
    </MainContainer>
  );
};

export default MainPage;
