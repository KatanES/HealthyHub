import Breakfast from '../../../components/AuthorizedUser/DiaryPage/Breakfast';
import Lunch from '../../../components/AuthorizedUser/DiaryPage/Lunch';
import Dinner from '../../../components/AuthorizedUser/DiaryPage/Dinner';
import Snack from '../../../components/AuthorizedUser/DiaryPage/Snack';
import symbol from '../../../assets/Welcome/symbol.svg';
import { Container, TitelPage, SVG, Section } from './DiaryPage.styled';

const DiaryPage = () => {
  return (
    <Container>
      <TitelPage>
        <SVG>
          <use href={symbol + '#icon-arrow-right'} />
        </SVG>
        <h2>Diary</h2>
      </TitelPage>
      <Section>
        <Breakfast />
        <Lunch />
        <Dinner />
        <Snack />
      </Section>
    </Container>
  );
};

export default DiaryPage;
