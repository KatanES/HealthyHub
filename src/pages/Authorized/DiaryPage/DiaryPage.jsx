import Breakfast from '../../../components/AuthorizedUser/DiaryPage/Breakfast';
import Lunch from '../../../components/AuthorizedUser/DiaryPage/Lunch';
import Dinner from '../../../components/AuthorizedUser/DiaryPage/Dinner';
import Snack from '../../../components/AuthorizedUser/DiaryPage/Snack';
import symbol from '../../../assets/Welcome/symbol.svg';
import { Container } from './DiaryPage.styled';


const DiaryPage = () => {
  return (
    <Container>
      <svg>
        <use href={symbol + '#icon-arrow-right'} />
      </svg>
      <h2>Diary</h2>
      <div>
        <Breakfast />
        <Lunch />
        <Dinner />
        <Snack />
      </div>
    </Container>
  );
};

export default DiaryPage;
