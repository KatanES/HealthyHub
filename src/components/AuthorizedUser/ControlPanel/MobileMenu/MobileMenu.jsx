import { Popover } from '@mui/material';

import { Goals } from '../Goals';
import { Weight } from '../Weight';
import sprite from '../../../../assets/sprite.svg';

import { globalColor } from '../../../Header/root';
import {
  MenuButtonCloseModal,
  SvgWrapperCloseModal,
} from '../ControlPanel.styled';

export const MobileMenu = ({
  closeMobileMenu,
  isOpen,
  anchorEl,
  openTargetSelectionModal,
  currentGoalIcon,
  goal,
  showMobileMenu,
  openСurrentWeightModal,
  weightIcon,
  weight,
}) => {
  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={closeMobileMenu}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      PaperProps={{
        sx: {
          position: 'relative',
          boxSizing: 'border-box',
          boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
          borderRadius: '12px',
          backgroundColor: globalColor.colorPrimaryBlack2,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '40px',
          width: '300px',
          height: 'auto',
        },
      }}
    >
      <MenuButtonCloseModal type="button" onClick={closeMobileMenu}>
        <SvgWrapperCloseModal>
          <use href={sprite + '#icon-close-circle'} />
        </SvgWrapperCloseModal>
      </MenuButtonCloseModal>

      <Goals
        openTargetSelectionModal={openTargetSelectionModal}
        currentGoalIcon={currentGoalIcon}
        goal={goal}
        showMobileMenu={showMobileMenu}
      />

      <Weight
        openWeightMenu={openСurrentWeightModal}
        weightIcon={weightIcon}
        weight={weight}
      />
    </Popover>
  );
};
