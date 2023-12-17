import sprite from '../../../assets/sprite.svg';

import {
  IconSelectWrapper,
  SvgWrapper,
  Title,
  Text,
  ControlPanelButton,
  TextWrapperGoal,
  ButtonTextContainer,
} from './ControlPanel.styled';

export const Goals = ({openGoalMenu, currentGoalIcon, goal, showMobileMenu}) => {
  return (
    <ControlPanelButton onClick={openGoalMenu}>
      <IconSelectWrapper>
        <img src={currentGoalIcon} alt="current user`s goal" />
      </IconSelectWrapper>
      <ButtonTextContainer>
        <Title>Goal</Title>

        <TextWrapperGoal>
          <Text>{goal}</Text>

          {showMobileMenu ? (
            <SvgWrapper>
              <use href={sprite + '#icon-arrow-right'} />
            </SvgWrapper>
          ) : (
            <SvgWrapper>
              <use href={sprite + '#icon-arrow-down'} />
            </SvgWrapper>
          )}
        </TextWrapperGoal>
      </ButtonTextContainer>
    </ControlPanelButton>
  );
};
