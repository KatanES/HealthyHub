import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

import { Goals } from './Goals';
import { Weight } from './Weight';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { TargetSelectionModal } from '../TargetSelectionModal/TargetSelectionModal';
import { СurrentWeightModal } from '../СurrentWeightModal/СurrentWeightModal';

import {
  gainMuscle,
  loseFatGirl,
  loseFatMen,
  maintakeGirl,
  maintakeMen,
  weightIcon,
} from '../../../assets/Header/headerImage';
import sprite from '../../../assets/sprite.svg';

import {
  WrapperControlPanel,
  MenuButton,
  SvgWrapper,
} from './ControlPanel.styled';

export const ControlPanel = () => {
  const [user] = useState({
    gender: 'Male',
    goal: 'Lose fat',
    weight: 65,
  }); //don`t need
  //   const user = useSelector(selectUser);

  const [isActive, setIsActive] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showTargetSelectionModal, setShowTargetSelectionModal] =
    useState(false);
  const [showСurrentWeightModal, setShowСurrentWeightModal] = useState(false);

  const isMobile = useMediaQuery('(max-width:834px)');

  const openMobileMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setIsActive(true);
    setShowMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setAnchorEl(null);
    setIsActive(false);
    setShowMobileMenu(false);
  };

  const openTargetSelectionModal = (event) => {
    setAnchorEl(event.currentTarget);
    setShowTargetSelectionModal(true);
  };

  const closeTargetSelectionModal = () => {
    setAnchorEl(null);
    setShowTargetSelectionModal(false);
  };

  const openСurrentWeightModal = (event) => {
    setAnchorEl(event.currentTarget);
    setShowСurrentWeightModal(true);
  };

  const closeСurrentWeightModal = () => {
    setAnchorEl(null);
    setShowСurrentWeightModal(false);
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
            openTargetSelectionModal={openTargetSelectionModal}
            currentGoalIcon={currentGoalIcon}
            goal={goal}
          />
          <Weight
            openСurrentWeightModal={openСurrentWeightModal}
            weightIcon={weightIcon}
            weight={weight}
          />
        </>
      )}

      {showMobileMenu && (
        <MobileMenu
          isOpen={Boolean(anchorEl)}
          anchorEl={anchorEl}
          closeMobileMenu={closeMobileMenu}
          openTargetSelectionModal={openTargetSelectionModal}
          currentGoalIcon={currentGoalIcon}
          goal={goal}
          showMobileMenu={showMobileMenu}
          openСurrentWeightModal={openСurrentWeightModal}
          weightIcon={weightIcon}
          weight={weight}
        />
      )}

      {showTargetSelectionModal && (
        <TargetSelectionModal
          isOpen={Boolean(anchorEl)}
          anchorEl={anchorEl}
          closeTargetSelectionModal={closeTargetSelectionModal}
          currentGoalIcon={currentGoalIcon}
          goal={goal}
          showTargetSelectionModal={showTargetSelectionModal}
        />
      )}

      {showСurrentWeightModal && (
        <СurrentWeightModal
          isOpen={Boolean(anchorEl)}
          anchorEl={anchorEl}
          closeСurrentWeightModal={closeСurrentWeightModal}
        />
      )}
    </WrapperControlPanel>
  );
};
