import { useMediaQuery } from '@mui/material';
import sprite from '../../../../assets/sprite.svg';

import {
  IconSelectWrapper,
  SvgWrapper,
  Title,
  Text,
  ControlPanelButton,
  TextWrapperGoal,
  ButtonTextContainer,
  IconArrowWrapper,
} from '../ControlPanel.styled';

export const Goals = ({
  openTargetSelectionModal,
  currentGoalIcon,
  currentGoal,
  isActive,
}) => {
  const screenWidth = useMediaQuery('(min-width: 835px)')
    ? 'desktop'
    : 'mobile';

  return (
    <ControlPanelButton onClick={openTargetSelectionModal}>
      <IconSelectWrapper>
        <img src={currentGoalIcon} alt="current user`s goal" />
      </IconSelectWrapper>
      <ButtonTextContainer>
        <Title>Goal</Title>

        <TextWrapperGoal>
          <Text>{currentGoal}</Text>

          {screenWidth === 'mobile' ? (
            <SvgWrapper>
              <use href={sprite + '#icon-arrow-right'} />
            </SvgWrapper>
          ) : (
            <IconArrowWrapper className={isActive ? 'active' : ''}>
              <use href={sprite + '#icon-arrow-down'} />
            </IconArrowWrapper>
          )}
        </TextWrapperGoal>
      </ButtonTextContainer>
    </ControlPanelButton>
  );
};
