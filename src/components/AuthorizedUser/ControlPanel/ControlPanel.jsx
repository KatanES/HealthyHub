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

  let currentGoalIcon;
  switch (user.gender) {
    case 'male':
      switch (user.goal) {
        case 'Lose Fat':
          currentGoalIcon = loseFatMen;
          break;
        case 'Maintain':
          currentGoalIcon = maintainMen;
          break;
        case 'Gain Muscle':
          currentGoalIcon = gainMuscle;
          break;
        case '1':
          currentGoalIcon = loseFatMen;
          break;
        case '2':
          currentGoalIcon = maintainMen;
          break;
        case '3':
          currentGoalIcon = gainMuscle;
          break;

        default:
          currentGoalIcon = gainMuscle;
          break;
      }
      break;

    case 'female':
      switch (user.goal) {
        case 'Lose Fat':
          currentGoalIcon = loseFatGirl;
          break;
        case 'Maintain':
          currentGoalIcon = maintainGirl;
          break;
        case 'Gain Muscle':
          currentGoalIcon = gainMuscle;
          break;
        case '1':
          currentGoalIcon = loseFatGirl;
          break;
        case '2':
          currentGoalIcon = maintainGirl;
          break;
        case '3':
          currentGoalIcon = gainMuscle;
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

  let currentGoal;
  switch (user.goal) {
    case 'Lose Fat':
      currentGoal = 'Lose fat';
      break;
    case 'Maintain':
      currentGoal = 'Maintain';
      break;
    case 'Gain Muscle':
      currentGoal = 'Gain Muscle';
      break;
    case '1':
      currentGoal = 'Lose fat';
      break;
    case '2':
      currentGoal = 'Maintain';
      break;
    case '3':
      currentGoal = 'Gain Muscle';
      break;

    default:
      currentGoal = 'Gain Muscle';
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
            currentGoal={currentGoal}
            isActive={isActive}
          />
          <Weight
            openСurrentWeightModal={openСurrentWeightModal}
            weightIcon={weightIcon}
            weight={user.weight}
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
          currentGoal={currentGoal}
          showMobileMenu={showMobileMenu}
          openСurrentWeightModal={openСurrentWeightModal}
          weightIcon={weightIcon}
          weight={user.weight}
        />
      )}
      {showTargetSelectionModal && (
        <TargetSelectionModal
          isOpen={Boolean(anchorEl)}
          anchorEl={anchorEl}
          closeTargetSelectionModal={closeTargetSelectionModal}
          gender={user.gender}
          currentGoal={currentGoal}
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
