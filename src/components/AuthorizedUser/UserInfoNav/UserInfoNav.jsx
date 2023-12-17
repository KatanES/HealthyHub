import { useState } from 'react'; //don`t need
// import { useSelector } from 'react-redux';
//import selectUser from selector;

import UserInfoModal from '../UserInfoModal/UserInfoModal';

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
  //   const user = useSelector(selectUser);

  const [isActive, setIsActive] = useState(false);
  const [userInfoModal, setUserInfoModal] = useState(false);

  const openUserInfoModal = () => {
    if (!userInfoModal) {
      setUserInfoModal(true);
      setIsActive(true);
    }
  };

  const closeUserInfoModal = () => {
    setUserInfoModal(false);
    setIsActive(false);
  };

  const { name, imgURL } = user;

  
  return (
    // <WrapperUserInfoNav>
    //   <Text>{name}</Text>

    //   {imgURL ? (
    //     <ImageHolder>
    //       <img src={imgURL} alt={name} />
    //     </ImageHolder>
    //   ) : (
    //     <IconAvatarWrapper>
    //       <use href={sprite + '#icon-profile-circle'} />
    //     </IconAvatarWrapper>
    //   )}

    //   <UserInfoNavButton type="button" onClick={openUserInfoModal}>
    //     <IconArrowWrapper className={isActive ? 'active' : ''}>
    //       <use href={sprite + '#icon-arrow-down'} />
    //     </IconArrowWrapper>
    //   </UserInfoNavButton>

    //   {userInfoModal && (
    //     <UserInfoModal isOpen={userInfoModal} closeModal={closeUserInfoModal} />
    //   )}
    // </WrapperUserInfoNav>

    <UserInfoNavButton type="button" onMouseDown={openUserInfoModal}>
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

      {userInfoModal && (
        <UserInfoModal isOpen={userInfoModal} closeModal={closeUserInfoModal} />
      )}
    </UserInfoNavButton>
  );
};
