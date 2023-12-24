import { Popover, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateWeight } from '../../../redux/auth/operations';
import { selectLastDate } from '../../../redux/auth/selectors';

import { globalColor } from '../../Header/root';
import {
  TextWrapper,
  Title,
  Text,
  Text2,
  WeightForm,
  InputStyled,
  ConfirmWeightModalButton,
  CloseWeightModalButton,
  SvgWrapper,
  ErrorMessage,
  MenuButtonCloseModal,
  SvgError,
  WrapperInput,
  Wrapper,
  MenuButtonCloseError,
} from './СurrentWeightModal.styled';

import sprite from '../../../assets/sprite.svg';

export const СurrentWeightModal = ({
  closeСurrentWeightModal,
  isOpen,
  anchorEl,
}) => {
  const dispatch = useDispatch();
  const [newWeight, setNewWeight] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const lastDate = useSelector(selectLastDate);

  const date = new Date();

  const screenWidth = useMediaQuery('(min-width: 835px)')
    ? 'desktop'
    : 'mobile';

  const isWideDesktopScreen = useMediaQuery('(min-width:1440px)');

  const formattedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;

  const handleNewWeight = (event) => {
    event.preventDefault();

    if (0 === newWeight || (newWeight < 1 && newWeight)) {
      setError('Weight can`t be less 1 kg');
      setIsError(true);
    } else if (newWeight > 300 && newWeight) {
      setError('Weight can`t be more 300 kg');
      setIsError(true);
    } else if (!newWeight) {
      setError('Enter your weight*');
      setIsError(true);
    } else {
      setError('');
      setIsError(false);
      closeСurrentWeightModal();
      dispatch(updateWeight({ weight: newWeight }));

      // setTimeout(() => {
      //   dispatch(fetchCaloriesIntake());
      // }, 150);
      //тут ще має бути діспатч для усіх компонентів для оновлення з файлу Сергія!!!
    }
  };

  const handleInputChange = (event) => {
    setNewWeight(Number(event.target.value));
  };

  const handleCloseError = () => {
    setError('');
    setIsError(false);
  };

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={closeСurrentWeightModal}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: isWideDesktopScreen ? 'left' : 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: isWideDesktopScreen ? 'left' : 'right',
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
            padding: '20px 24px 40px',
            marginTop: '26px',
            gap: '16px',
            borderRadius: '12px',
            backgroundColor: globalColor.colorPrimaryBlack2,
            boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
          },
        },
      }}
    >
      <Wrapper>
        <TextWrapper>
          <Title>Enter your current weight</Title>
          <Text>You can record your weight once a day</Text>
        </TextWrapper>

        <Text2>
          Today <span>{formattedDate}</span>
        </Text2>

        {lastDate === date ? (
          <Text2>You already recorded your weight today</Text2>
        ) : (
          <WeightForm onSubmit={handleNewWeight} noValidate>
            <WrapperInput>
              <InputStyled
                type="number"
                step="0.1"
                min="1"
                max="300"
                name="weight"
                placeholder="Enter your weight"
                defaultValue={newWeight}
                autoComplete="off"
                onChange={handleInputChange}
                required
                autoFocus
                style={{
                  borderColor: isError ? globalColor.colorSecondaryRed : '',
                }}
              />

              {isError && (
                <>
                  <MenuButtonCloseError
                    type="button"
                    onClick={handleCloseError}
                  >
                    <SvgError>
                      <use href={sprite + '#icon-error'} />
                    </SvgError>
                  </MenuButtonCloseError>
                  <ErrorMessage>{error}</ErrorMessage>
                </>
              )}
            </WrapperInput>
            <ConfirmWeightModalButton>Confirm</ConfirmWeightModalButton>
          </WeightForm>
        )}

        {screenWidth === 'mobile' ? (
          <CloseWeightModalButton onClick={closeСurrentWeightModal}>
            Close
          </CloseWeightModalButton>
        ) : (
          <MenuButtonCloseModal type="button" onClick={closeСurrentWeightModal}>
            <SvgWrapper>
              <use href={sprite + '#icon-close-circle'} />
            </SvgWrapper>
          </MenuButtonCloseModal>
        )}
      </Wrapper>
    </Popover>
  );
};
