import { Popover } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { LogoutBtn } from '../LogoutBtn/LogoutBtn';
import { globalColor } from '../../Header/root';
import { IconWrapper, Text, UserInfoModalButton } from './UserInfoModal.styled';
import sprite from '../../../assets/sprite.svg';

export const UserInfoModal = ({ isOpen, onClose, anchorEl }) => {
  const navigate = useNavigate();

  const handleSettings = () => {
    navigate('/settings');
    onClose();
  };

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
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
          boxSizing: 'border-box',
          boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
          borderRadius: '12px',
          backgroundColor: globalColor.colorPrimaryBlack2,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '24px',
          width: '158px',
          height: '112px',
          '@media (min-width: 834px)': {
            gap: '16px',
            height: '104px',
          },
        },
      }}
    >
      <UserInfoModalButton type="button" onClick={handleSettings}>
        <IconWrapper>
          <use href={sprite + '#icon-setting-2'} />
        </IconWrapper>

        <Text>Setting</Text>
      </UserInfoModalButton>
      <LogoutBtn onClose={onClose} />
    </Popover>
  );
};
