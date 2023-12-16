import { useState } from 'react'; //don`t need
// import { useSelector } from 'react-redux';
//import selectUser from selector;

import {
  WrapperUserInfoNav,
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

  const [userInfoModal, setUserInfoModal] = useState(false);

  const openUserInfoModal = () => {
    setUserInfoModal(true);
  };

  const closeUserInfoModal = () => {
    setUserInfoModal(false);
  };

  const { name, imgURL } = user;

  return (
    <WrapperUserInfoNav>
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

      <UserInfoNavButton type="button" onClick={openUserInfoModal}>
        <IconArrowWrapper>
          <use href={sprite + '#icon-arrow-down'} />
        </IconArrowWrapper>
      </UserInfoNavButton>

      {userInfoModal && (
        <>
          <div>component UserInfoModal OR popup mui</div>
          <button onClick={closeUserInfoModal}> </button>
        </>
      )}
    </WrapperUserInfoNav>
  );
};
