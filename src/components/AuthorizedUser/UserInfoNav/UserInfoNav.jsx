import { useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';

import {
  Text,
  ImageHolder,
  IconAvatarWrapper,
  UserInfoNavButton,
  IconArrowWrapper,
} from './UserInfoNav.styled';

import sprite from '../../../assets/sprite.svg';

export const UserInfoNav = () => {

  const { user } = useAuth();
  const { name, avatarURL } = user;

  const [anchorEl, setAnchorEl] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsActive(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsActive(false);
  };

  return (
    <>
      <UserInfoNavButton onClick={handleClick}>
        <Text>{name}</Text>

        {avatarURL ? (
          <ImageHolder>
            <img src={avatarURL} alt={name} />
          </ImageHolder>
        ) : (
          <IconAvatarWrapper>
            <use href={sprite + '#icon-profile-circle'} />
          </IconAvatarWrapper>
        )}

        <IconArrowWrapper className={isActive ? 'active' : ''}>
          <use href={sprite + '#icon-arrow-down'} />
        </IconArrowWrapper>
      </UserInfoNavButton>
      <UserInfoModal
        isOpen={Boolean(anchorEl)}
        onClose={handleClose}
        anchorEl={anchorEl}
        isActive={isActive}
      />
    </>
  );
};
