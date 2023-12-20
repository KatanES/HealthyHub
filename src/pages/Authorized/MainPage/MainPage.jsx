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

const MainPage = () => {
  return (
    <Container>
      <TitelPage>
        <Titel>Today</Titel>
        <TitelFlex>
          <Text>On the way to the goal</Text>
          <SVG>
            <use href={symbol + '#icon-arrow-right'} />
          </SVG>
        </TitelFlex>
      </TitelPage>
      <SectionDiary>
        <Diary />
      </SectionDiary>
    </Container>
  );
};

export default MainPage;
