import { Popover, useMediaQuery } from '@mui/material';

import sprite from '../../../assets/sprite.svg';
import { globalColor } from '../../Header/root';
import {
  Wrapper,
  CloseTargetSelectionModalButton,
  MenuButtonCloseModal,
  SvgWrapper,
  TextWrapper,
  Title,
  Text,
  ConfirmTargetSelectionModalButton,
} from './TargetSelectionModal.styled';

export const TargetSelectionModal = ({
  closeTargetSelectionModal,
  isOpen,
  anchorEl,
  currentGoalIcon,
  goal,
}) => {
  const screenWidth = useMediaQuery('(min-width: 835px)')
    ? 'desktop'
    : 'mobile';

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
            padding: '20px 24px',
            margin: '26px',
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

        {/* форма з селектами які скалаються з
        радіо-кнопок: - іконки та підпису "Lose fat" - іконки та підпису
        "Maintain" - іконки та підпису "Gain Muscle" Компонент містить кнопку
        Confirm (для відправки інформації на бекенд по обраній цілі)
         */}
        <button>
          {currentGoalIcon} {goal}
        </button>
        <ConfirmTargetSelectionModalButton onClick={closeTargetSelectionModal}>
          Confirm
        </ConfirmTargetSelectionModalButton>
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
