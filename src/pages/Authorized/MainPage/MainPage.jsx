import { Link } from 'react-router-dom';
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
} from './MainPage.styled';
//
import { DailyGoalInfo } from './DailyGoal/DailyGoal';
// import { useSelector } from 'react-redux';
// import { getCaloriesGoal } from '../../../redux/dailyGoalsCalories/selectors';

//

const MainPage = () => {
  // const dailyCalories = useSelector(getCaloriesGoal);
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
      <SectionDiary>
        <Diary />
      </SectionDiary>
    </Container>
  );
};

export default MainPage;
