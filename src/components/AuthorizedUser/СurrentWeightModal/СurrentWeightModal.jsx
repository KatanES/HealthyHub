import { Popover } from '@mui/material';

import { globalColor } from '../../Header/root';
// import sprite from '../../../assets/sprite.svg';

export const СurrentWeightModal = ({
  closeСurrentWeightModal,
  isOpen,
  anchorEl,
}) => {
  const date = Date.now();
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
          gap: '16px',
          width: '100%',
          height: '100%',

          '@media (min-width: 834px)': {
            width: '392px',
            height: 'auto',
            borderRadius: '12px',
            backgroundColor: globalColor.colorPrimaryBlack2,
            boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
          },
        },
      }}
    >
      <div>
        <h2>current</h2>
        <p>You can record your weight once a day</p>
      </div>

      <p>
        Today <span>{date}</span>
      </p>
      <div>
        <input type="text" />
        <button onClick={closeСurrentWeightModal}>Confirm</button>
      </div>

      <button onClick={closeСurrentWeightModal}>Close</button>
    </Popover>
  );
};
