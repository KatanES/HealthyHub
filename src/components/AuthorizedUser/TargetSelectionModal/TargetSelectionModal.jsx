import { Popover } from '@mui/material';

// import sprite from '../../../assets/sprite.svg';
import { globalColor } from '../../Header/root';

export const TargetSelectionModal = ({
  closeTargetSelectionModal,
  isOpen,
  anchorEl,
  currentGoalIcon,
  goal,
}) => {
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
          gap: '16px',
          width: '100%',
          height: '100%',
          marginTop: '40px',

          '@media (min-width: 834px)': {
            width: '392px',
            height: 'auto',
            margin: '26px',
            borderRadius: '12px',
            backgroundColor: globalColor.colorPrimaryBlack2,
            boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
          },
        },
      }}
    >
      <div>
        <div>
          <h2>Target selection</h2>
          <p>The service will adjust your calorie intake to your goal</p>
        </div>

        <div>
          <button>
            {currentGoalIcon} {goal}
          </button>

          <button onClick={closeTargetSelectionModal}>Confirm</button>
        </div>

        <button onClick={closeTargetSelectionModal}>Close</button>
      </div>
    </Popover>
  );
};
