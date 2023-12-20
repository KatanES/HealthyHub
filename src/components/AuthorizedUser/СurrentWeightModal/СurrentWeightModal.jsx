import { Popover, useMediaQuery } from '@mui/material';

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
  MenuButtonCloseModal,
} from './СurrentWeightModal.styled';

import sprite from '../../../assets/sprite.svg';

export const СurrentWeightModal = ({
  closeСurrentWeightModal,
  isOpen,
  anchorEl,
}) => {
  const date = new Date();

  const screenWidth = useMediaQuery('(min-width: 835px)')
    ? 'desktop'
    : 'mobile';

  const formattedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;

  const handleNewWeight = () => {
    closeСurrentWeightModal();
  };

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={closeСurrentWeightModal}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
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

          '@media (min-width: 834px)': {
            width: '392px',
            height: 'auto',
            padding: '20px 24px 40px',
            gap: '16px',
            borderRadius: '12px',
            backgroundColor: globalColor.colorPrimaryBlack2,
            boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
          },
        },
      }}
    >
      <TextWrapper>
        <Title>Enter your current weight</Title>
        <Text>You can record your weight once a day</Text>
      </TextWrapper>

      <Text2>
        Today <span>{formattedDate}</span>
      </Text2>
      <WeightForm onSubmit={handleNewWeight}>
        <InputStyled
          type="number"
          step="0.1"
          min="0"
          name="weight"
          placeholder="Enter your weight"
          autoComplete="off"
          // onChange={handleInputChange}
          required
          autoFocus
        />

        <ConfirmWeightModalButton>Confirm</ConfirmWeightModalButton>
      </WeightForm>

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
    </Popover>
  );
};
