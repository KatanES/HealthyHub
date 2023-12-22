import { useState } from 'react'; //don`t need

// import { useAuth } from '../../hooks/useAuth';

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
  const [user] = useState({
    name: 'Konstantin',
    imgURL: 'https://walldeco.ua/img/for_page/mona-liza.jpg',
  }); //don`t need

  // const { user } = useAuth();

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

  const { name, imgURL } = user;

  return (
    <>
      <UserInfoNavButton onClick={handleClick}>
        <Text>{name}</Text>

        {imgURL ? (
          <ImageHolder>
            <img src={imgURL} alt={name} />
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
