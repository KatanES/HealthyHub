import Modal from 'react-modal';

import sprite from '../../../../assets/sprite.svg';
import { Goals } from '../Goals';
import { Weight } from '../Weight';

// Встановлюємо кореневий елемент для модального вікна
Modal.setAppElement('#root');

import { MenuButton, SvgWrapper } from '../ControlPanel.styled';

export default function MobileMenu({
  closeMobileMenu,
  isOpen,
  openGoalMenu,
  currentGoalIcon,
  goal,
  showMobileMenu,
  openWeightMenu,
  weightIcon,
  weight,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeMobileMenu}
      contentLabel="Example Modal"
    >
      <MenuButton type="button" onClick={closeMobileMenu}>
        <SvgWrapper>
          <use href={sprite + '#icon-close-circle'} />
        </SvgWrapper>
      </MenuButton>

      <Goals
        openGoalMenu={openGoalMenu}
        currentGoalIcon={currentGoalIcon}
        goal={goal}
        showMobileMenu={showMobileMenu}
      />

      <Weight
        openWeightMenu={openWeightMenu}
        weightIcon={weightIcon}
        weight={weight}
      />
    </Modal>
  );
}
