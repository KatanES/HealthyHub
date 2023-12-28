import { Link } from 'react-router-dom';
import Breakfast from '../../../components/AuthorizedUser/DiaryPage/Breakfast';
import Lunch from '../../../components/AuthorizedUser/DiaryPage/Lunch';
import Dinner from '../../../components/AuthorizedUser/DiaryPage/Dinner';
import Snack from '../../../components/AuthorizedUser/DiaryPage/Snack';
import symbol from '../../../assets/Welcome/symbol.svg';
import {
  Container,
  TitelPage,
  SVG,
  SectionDiaryPage,
} from './DiaryPage.styled';

const DiaryPage = () => {
  return (
    <Container>
      <TitelPage>
        <Link to="/main">
          <SVG>
            <use href={symbol + '#icon-arrow-left'} />
          </SVG>
        </Link>
        <h2>Diary</h2>
      </TitelPage>
      <SectionDiaryPage>
        <Breakfast />
        <Lunch />
        <Dinner />
        <Snack />
      </SectionDiaryPage>
    </Container>
  );
};

export default DiaryPage;
