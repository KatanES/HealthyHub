import { useMediaQuery } from '@mui/material';
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

export const Goals = ({ openTargetSelectionModal, currentGoalIcon, goal }) => {
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
          <Text>{goal}</Text>

          {screenWidth === 'mobile' ? (
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
