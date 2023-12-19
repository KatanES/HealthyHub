// import { logOut } from '../../redux';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import sprite from '../../../assets/sprite.svg';

import { IconWrapper, Text, LogoutBtnButton } from './LogoutBtn.styled';

export const LogoutBtn = () => {
  // const dispatch = useDispatch();

  //  const handleLogOut = () => dispatch(logOut());

  // const handleLogOut = async () => {
  //   await dispatch(logOut());

  //   dispatch(clearWaterIntake());
  //   dispatch(clearDailyCalories());
  //   dispatch(clearDiary());
  //   dispatch(clearStatistic());

  //   closeModal();
  // };

  return (
    <LogoutBtnButton
      type="button"
      // onClick={handleLogOut}
    >
      <IconWrapper>
        <use href={sprite + '#icon-logout'} />
      </IconWrapper>
      <Text>Log out</Text>
    </LogoutBtnButton>
  );
};
