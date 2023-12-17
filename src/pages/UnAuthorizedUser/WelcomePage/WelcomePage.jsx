import symbol from '../../../assets/Welcome/symbol.svg'
import IllustrationDesctop from '../../../assets/Welcome/IllustrationDesctop.png'
import { HeroImg, HeroText, HeroTitle, WelcomeContainer, Wrapper, Button, WrapperButtons, HeroList, HeroItem, HeroItemText, SVG, WrapperImg } from './WelcomePage.styled';
import { useNavigate } from 'react-router-dom';



const WelcomePage = () => {
const navigate = useNavigate();

const handleSignUpClick = () => {
  navigate('/signup')
};

const handleSignInClick = () => {
  navigate('/signin')
}

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
        <HeroText>The service will help you set goals and follow them.</HeroText>
        <WrapperButtons>
          <Button type="button" onClick={handleSignInClick}>Sign in</Button>
          <Button type="button" onClick={handleSignUpClick}>Sign up</Button>
        </WrapperButtons>
        <HeroList>
          <HeroItem>
          <SVG>
        <use href={symbol + '#icon-Ellipse-15'} />
      </SVG>
            <HeroItemText>Set goals</HeroItemText>
          </HeroItem>
          <HeroItem>
          <SVG>
        <use href={symbol + '#icon-Ellipse-15'} />
      </SVG>
            <HeroItemText>Watch your calories</HeroItemText>
          </HeroItem>
          <HeroItem>
          <SVG>
        <use href={symbol + '#icon-Ellipse-15'} />
      </SVG>
            <HeroItemText>Keep track of your water intake</HeroItemText>
          </HeroItem>
          <HeroItem>
          <SVG>
        <use href={symbol + '#icon-Ellipse-15'} />
      </SVG>
            <HeroItemText>Control your weight</HeroItemText>
          </HeroItem>
        </HeroList>
      </Wrapper>

    </WelcomeContainer>
  );
};

export default WelcomePage;

