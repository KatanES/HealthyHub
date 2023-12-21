// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { globalColor } from '../../Header/root';

// import { logOut } from '../../../redux/auth/operations';

// export const logOut = createAsyncThunk(
//   'auth/api/logOut',
//   async (_, thunkAPI) => {
//     try {
//       await axios.post('/user/logout');
//       clearAuthHeader();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// сюди ж треба додати в стейт редьюсери по очистці (поверненя до інішиал стейту) компонентів на сторінці (і екшени винести) , в код прописати виклик цих функцій з екшенів / стейту

import sprite from '../../../assets/sprite.svg';

import {
  IconWrapper,
  Text,
  LogoutBtnButton,
  TextModalConfirm,
  ModalConfirmButtonWrap,
  CancelModalConfirmButton,
  LogoutModalConfirmButton,
} from './LogoutBtn.styled';

export const LogoutBtn = ({ onClose }) => {
  // const dispatch = useDispatch();

  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);

  const openModalConfirm = async () => {
    setIsModalConfirmOpen(true);
  };

  const closeModalConfirm = () => {
    setIsModalConfirmOpen(false);
    onClose();
  };

  const handleLogOut = async () => {
    //   dispatch(logOut());
    //сюди!!!!
    localStorage.clear();
    onClose();
  };

  return (
    <>
      <LogoutBtnButton type="button" onClick={openModalConfirm}>
        <IconWrapper>
          <use href={sprite + '#icon-logout'} />
        </IconWrapper>
        <Text>Log out</Text>
      </LogoutBtnButton>

      <Dialog
        open={isModalConfirmOpen}
        onClose={closeModalConfirm}
        PaperProps={{
          sx: {
            boxSizing: 'border-box',
            backgroundColor: globalColor.colorPrimaryBlack,
            padding: '24px 10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
            height: 'auto',

            '@media (min-width: 834px)': {
              width: '392px',
              borderRadius: '12px',
              backgroundColor: globalColor.colorPrimaryBlack2,
              boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
            },
          },
        }}
      >
        <TextModalConfirm>Are you sure you want to log out?</TextModalConfirm>

        <ModalConfirmButtonWrap>
          <CancelModalConfirmButton onClick={closeModalConfirm}>
            Cancel
          </CancelModalConfirmButton>
          <LogoutModalConfirmButton onClick={handleLogOut}>
            Log out
          </LogoutModalConfirmButton>
        </ModalConfirmButtonWrap>
      </Dialog>
    </>
  );
};
