import { Popover, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';

import { updateGoal } from '../../../redux/auth/operations';

import sprite from '../../../assets/sprite.svg';

import {
  gainMuscle,
  loseFatGirl,
  loseFatMen,
  maintainGirl,
  maintainMen,
} from '../../../assets/Header/headerImage';

import { globalColor } from '../../Header/root';
import {
  Wrapper,
  CloseTargetSelectionModalButton,
  MenuButtonCloseModal,
  SvgWrapper,
  TextWrapper,
  Title,
  Text,
  Form,
  RadioContainer,
  ImageWrapper,
  Input,
  Label,
  ConfirmTargetSelectionModalButton,
} from './TargetSelectionModal.styled';
import { useState } from 'react';

export const TargetSelectionModal = ({
  closeTargetSelectionModal,
  isOpen,
  anchorEl,
  gender,
  // currentGoal,
}) => {
  const dispatch = useDispatch();
  const [newGoal, setNewGoal] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const goalMapping = {
    1: 'Lose Fat',
    2: 'Maintain',
    3: 'Gain Muscle',
  };

  const screenWidth = useMediaQuery('(min-width: 835px)')
    ? 'desktop'
    : 'mobile';

  const handleGoalSelection = (goal) => {
    setNewGoal(goal);
    setIsButtonDisabled(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateGoal({
        goal: Object.keys(goalMapping).find(
          (key) => goalMapping[key] === newGoal
        ),
      })
    );
    closeTargetSelectionModal();
  };

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={closeTargetSelectionModal}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      PaperProps={{
        sx: {
          position: 'relative',
          boxSizing: 'border-box',
          backgroundColor: globalColor.colorPrimaryBlack,
          padding: '24px 10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
          height: '100%',
          marginTop: '40px',

          '@media (min-width: 834px)': {
            width: '392px',
            height: 'auto',
            padding: '20px 84px 40px 24px',
            marginTop: '26px',
            borderRadius: '12px',
            backgroundColor: globalColor.colorPrimaryBlack2,
            boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
          },
        },
      }}
    >
      <Wrapper>
        <TextWrapper>
          <Title>Target selection</Title>
          <Text>The service will adjust your calorie intake to your goal</Text>
        </TextWrapper>

        <Form onSubmit={handleSubmit}>
          <RadioContainer>
            <ImageWrapper
              data-ischecked={newGoal === 'Lose Fat'}
              onClick={() => handleGoalSelection('Lose Fat')}
            >
              {gender === 'Female' ? (
                <img src={loseFatGirl} alt="Lose fat goal" />
              ) : (
                <img src={loseFatMen} alt="Lose fat goal" />
              )}
            </ImageWrapper>
            <Input
              type="radio"
              id="loseFat"
              name="goal"
              value="Lose Fat"
              onChange={() => handleGoalSelection('Lose Fat')}
            />
            <Label htmlFor="loseFat" data-ischecked={newGoal === 'Lose Fat'}>
              Lose fat
            </Label>
          </RadioContainer>
          <RadioContainer>
            <ImageWrapper
              data-ischecked={newGoal === 'Maintain'}
              onClick={() => handleGoalSelection('Maintain')}
            >
              {gender === 'Female' ? (
                <img src={maintainGirl} alt="Maintain goal" />
              ) : (
                <img src={maintainMen} alt="Maintain goal" />
              )}
            </ImageWrapper>
            <Input
              type="radio"
              id="maintain"
              name="goal"
              value="Maintain"
              onChange={() => handleGoalSelection('Maintain')}
            />
            <Label htmlFor="maintain" data-ischecked={newGoal === 'Maintain'}>
              Maintain
            </Label>
          </RadioContainer>
          <RadioContainer>
            <ImageWrapper
              data-ischecked={newGoal === 'Gain Muscle'}
              onClick={() => handleGoalSelection('Gain Muscle')}
            >
              <img src={gainMuscle} alt="Gain Muscle goal" />
            </ImageWrapper>
            <Input
              type="radio"
              id="gainMuscle"
              name="goal"
              value="Gain Muscle"
              onChange={() => handleGoalSelection('Gain Muscle')}
            />
            <Label
              htmlFor="gainMuscle"
              data-ischecked={newGoal === 'Gain Muscle'}
            >
              Gain Muscle
            </Label>
          </RadioContainer>
          <ConfirmTargetSelectionModalButton
            className={!isButtonDisabled ? 'disabled' : ''}
            type="submit"
            disabled={isButtonDisabled}
          >
            Confirm
          </ConfirmTargetSelectionModalButton>
        </Form>

        {screenWidth === 'mobile' ? (
          <CloseTargetSelectionModalButton onClick={closeTargetSelectionModal}>
            Close
          </CloseTargetSelectionModalButton>
        ) : (
          <MenuButtonCloseModal
            type="button"
            onClick={closeTargetSelectionModal}
          >
            <SvgWrapper>
              <use href={sprite + '#icon-close-circle'} />
            </SvgWrapper>
          </MenuButtonCloseModal>
        )}
      </Wrapper>
    </Popover>
  );
};
