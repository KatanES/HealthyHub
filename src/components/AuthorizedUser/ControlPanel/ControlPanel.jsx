import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

import { useAuth } from '../../hooks/useAuth';

import { Goals } from './ComponetsControlPanel/Goals';
import { Weight } from './ComponetsControlPanel/Weight';
import { MobileMenu } from './ComponetsControlPanel/MobileMenu';
import { TargetSelectionModal } from '../TargetSelectionModal/TargetSelectionModal';
import { СurrentWeightModal } from '../СurrentWeightModal/СurrentWeightModal';

import {
  gainMuscle,
  loseFatGirl,
  loseFatMen,
  maintainGirl,
  maintainMen,
  weightIcon,
} from '../../../assets/Header/headerImage';
import sprite from '../../../assets/sprite.svg';

import {
  WrapperControlPanel,
  MenuButton,
  SvgWrapper,
} from './ControlPanel.styled';

export const ControlPanel = () => {
  const { user } = useAuth();

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
    setIsActive(true);
    setShowMobileMenu(false);
  };

  const closeTargetSelectionModal = () => {
    setAnchorEl(null);
    setShowTargetSelectionModal(false);
    setIsActive(false);
  };

  const openСurrentWeightModal = (event) => {
    setAnchorEl(event.currentTarget);
    setShowСurrentWeightModal(true);
    setShowMobileMenu(false);
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
          currentGoalIcon = maintainMen;
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
          currentGoalIcon = maintainGirl;
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
            isActive={isActive}
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
          gender={gender}
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
