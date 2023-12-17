import Modal from 'react-modal';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import { CustomModal } from './UserInfoModal.styled';
import { IconWrapper, Text, UserInfoModalButton } from './UserInfoModal.styled';

// import { logOut } from '../../redux';

import sprite from '../../../assets/sprite.svg';
import { useEffect } from 'react';

Modal.setAppElement('#root');

const UserInfoModal = ({ isOpen, closeModal }) => {
  const customStyles = {
    overlay: {
      // position: 'fixed',
      // top: 0,
      // left: 0,
      // width: '100vw',
      // height: '100vh',

      backgroundColor: 'transparent',
      zIndex: 200,
      overflow: 'auto',
    },
    
    content: {
      position: 'absolute',
      top: '54px',
      right: '10px',
      left: 'auto',
      bottom: 'auto',
      width: '158px',
      height: '104px',
      padding: 0,
      border: 'none',
      borderRadius: '24px',
      backgroundColor: 'black',
      boxShadow: '0 4px 14px 0 rgba(227, 255, 168, 0.2)',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '16px',

      '@media (minWidth: 834px)': {
        top: '80px',
        right: '27px',
      },
      '@media (minWidth: 1440px)': {
        top: '80px',
        right: '34px',
      },
    },
  };

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  //  const handleSettings = () => {
  //    navigate('/settings');
  //    closeModal();
  //  };

  //  const handleLogOut = () => dispatch(logOut());

  // const handleLogOut = async () => {
  //   await dispatch(logOut());

  //   dispatch(clearWaterIntake());
  //   dispatch(clearDailyCalories());
  //   dispatch(clearDiary());
  //   dispatch(clearStatistic());

  //   closeModal();
  // };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Заборона прокрутки тіла при відкритті модалі
    } else {
      document.body.style.overflow = ''; // Відновлення прокрутки тіла при закритті модалі
    }

    return () => {
      document.body.style.overflow = ''; // Відновлення прокрутки тіла при видаленні компонента
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Your Modal"
    >
      <UserInfoModalButton
        type="button"
        // onClick={handleSettings}
      >
        <IconWrapper>
          <use href={sprite + '#icon-setting-2'} />
        </IconWrapper>

        <Text>Setting</Text>
      </UserInfoModalButton>

      <UserInfoModalButton
        type="button"
        // onClick={handleLogOut}
      >
        <IconWrapper>
          <use href={sprite + '#icon-logout'} />
        </IconWrapper>
        <Text>Log out</Text>
      </UserInfoModalButton>
    </Modal>
  );

  // return (
  //   <CustomModal
  //     isOpen={isOpen}
  //     onRequestClose={closeModal}
  //     onClick={closeModal}
  //     contentLabel="Your Modal"
  //   >
  //     {/* Вміст модального вікна */}
  //     <h2>Your Modal Content</h2>
  //     <p>This is the content of your modal.</p>
  //     <button onClick={closeModal}>Close Modal</button>
  //   </CustomModal>
  // );
};

export default UserInfoModal;
