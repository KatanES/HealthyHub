import { AuthNav } from '../../../components/NotAuthorizedUser/AuthNav/AuthNav';

import symbol from '../../../assets/Welcome/symbol.svg';
import IllustrationDesctop from '../../../assets/Welcome/IllustrationDesctop.png';
import {
  HeroImg,
  HeroText,
  HeroTitle,
  WelcomeContainer,
  Wrapper,
  HeroList,
  HeroItem,
  HeroItemText,
  SvgWrapper,
  WrapperImg,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <WelcomeContainer>
      <WrapperImg>
        <HeroImg
          src={IllustrationDesctop}
          alt="The main picture a girl with a watch"
        />
      </WrapperImg>
      <Wrapper>
        <HeroTitle>Set goals and achieve them</HeroTitle>
        <HeroText>
          The service will help you set goals and follow them.
        </HeroText>
        <AuthNav />
        <HeroList>
          <HeroItem>
            <SvgWrapper>
              <use href={symbol + '#icon-Ellipse-15'} />
            </SvgWrapper>
            <HeroItemText>Set goals</HeroItemText>
          </HeroItem>
          <HeroItem>
            <SvgWrapper>
              <use href={symbol + '#icon-Ellipse-15'} />
            </SvgWrapper>
            <HeroItemText>Watch your calories</HeroItemText>
          </HeroItem>
          <HeroItem>
            <SvgWrapper>
              <use href={symbol + '#icon-Ellipse-15'} />
            </SvgWrapper>
            <HeroItemText>Keep track of your water intake</HeroItemText>
          </HeroItem>
          <HeroItem>
            <SvgWrapper>
              <use href={symbol + '#icon-Ellipse-15'} />
            </SvgWrapper>
            <HeroItemText>Control your weight</HeroItemText>
          </HeroItem>
        </HeroList>
      </Wrapper>
    </WelcomeContainer>
  );
};

export default WelcomePage;
