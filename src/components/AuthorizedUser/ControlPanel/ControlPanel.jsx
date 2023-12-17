import { useState } from 'react';

import {
  gainMuscle,
  loseFatGirl,
  loseFatMen,
  maintakeGirl,
  maintakeMen,
  weightIcon,
} from '../../../assets/Header/headerImage';
import sprite from '../../../assets/sprite.svg';

import { Goals } from './Goals';
import { Weight } from './Weight';

import {
  WrapperControlPanel,
  MenuButton,
  SvgWrapper,
} from './ControlPanel.styled';
import MobileMenu from './MobileMenu/MobileMenu';
import { useMediaQuery } from '@mui/material';

export const ControlPanel = () => {
  const [user] = useState({
    gender: 'Male',
    goal: 'Lose fat',
    weight: 65,
  }); //don`t need
  //   const user = useSelector(selectUser);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showGoalMenu, setShowGoalMenu] = useState(false);
  const [showWeightMenu, setShowWeightMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);

   const isMobile = useMediaQuery('(max-width:834px)');

  const openMobileMenu = () => {
    setShowMobileMenu(true);
    setIsActive(true);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    setIsActive(false);
  };

  const openGoalMenu = () => {
    setShowGoalMenu(true);
  };

  const closeGoalMenu = () => {
    setShowGoalMenu(false);
  };

  const openWeightMenu = () => {
    setShowWeightMenu(true);
  };

  const closeWeightMenu = () => {
    setShowWeightMenu(false);
  };

  const { gender, goal, weight } = user;

  let currentGoalIcon;

  switch (gender) {
    case 'Male':
      switch (goal) {
        case 'Lose fat':
          currentGoalIcon = loseFatMen;
          break;

        case 'Maintain':
          currentGoalIcon = maintakeMen;
          break;

        default:
          currentGoalIcon = gainMuscle;
          break;
      }
      break;

    case 'Female':
      switch (goal) {
        case 'Lose fat':
          currentGoalIcon = loseFatGirl;
          break;

        case 'Maintain':
          currentGoalIcon = maintakeGirl;
          break;

        default:
          currentGoalIcon = gainMuscle;
          break;
      }
      break;

    default:
      currentGoalIcon = gainMuscle;
      break;
  }

  return (
    <WrapperControlPanel>
      {isMobile ? (
        <MenuButton type="button" onClick={openMobileMenu}>
          <SvgWrapper className={isActive ? 'active' : ''}>
            <use href={sprite + '#icon-menu'} />
          </SvgWrapper>
        </MenuButton>
      ) : (
        <>
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
        </>
      )}

      {showMobileMenu && (
        <MobileMenu
          isOpen={showMobileMenu}
          closeMobileMenu={closeMobileMenu}
          openGoalMenu={openGoalMenu}
          currentGoalIcon={currentGoalIcon}
          goal={goal}
          showMobileMenu={showMobileMenu}
          openWeightMenu={openWeightMenu}
          weightIcon={weightIcon}
          weight={weight}
        />
      )}

      {showGoalMenu && (
        <>
          <div>component TargetSelectionModal, OR popup mui</div>
          <button onClick={closeGoalMenu}> </button>
        </>
      )}

      {showWeightMenu && (
        <>
          <div>component СurrentWeightModal OR popup mui</div>
          <button onClick={closeWeightMenu}> </button>
        </>
      )}
    </WrapperControlPanel>
  );
};
