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

import {
  WrapperControlPanel,
  IconSelectWrapper,
  Goals,
  //   MenuButton,
  Weight,
  SvgWrapper,
  Title,
  Text,
  ControlPanelButton,
  TextWrapperGoal,
  TextWrapperWeight,
} from './ControlPanel.styled';

export const ControlPanel = () => {
  const [user] = useState({
    gender: 'Male',
    goal: 'Lose fat',
    weight: 65,
  }); //don`t need
  //   const user = useSelector(selectUser);

  //   const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showGoalMenu, setShowGoalMenu] = useState(false);
  const [showWeightMenu, setShowWeightMenu] = useState(false);

  //   const openMobileMenu = () => {
  //     setShowMobileMenu(true);
  //   };

  //   const closeMobileMenu = () => {
  //     setShowMobileMenu(false);
  //   };

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
      {/* <MenuButton type="button" onClick={openMobileMenu}>
          <IconWrapper>
            <use href={sprite + '#icon-menu'} />
          </IconWrapper>
        </MenuButton> */}
      {/* {showMobileMenu ? <MobileMenu> :  (<Goals /> and  <Weight />) */}

      <Goals>
        <IconSelectWrapper>
          <img src={currentGoalIcon} alt="current user`s goal" />
        </IconSelectWrapper>
        <div>
          <Title>Goal</Title>

          <TextWrapperGoal>
            <Text>{goal}</Text>
            <ControlPanelButton onClick={openGoalMenu}>
              <SvgWrapper>
                <use href={sprite + '#icon-arrow-down'} />
              </SvgWrapper>
            </ControlPanelButton>
          </TextWrapperGoal>
        </div>

        {showGoalMenu && (
          <>
            <div>component TargetSelectionModal, OR popup mui</div>
            <button onClick={closeGoalMenu}> </button>
          </>
        )}
      </Goals>
      <Weight>
        <IconSelectWrapper>
          <img src={weightIcon} alt="current user`s weight" />
        </IconSelectWrapper>
        <div>
          <Title>Weight</Title>

          <TextWrapperWeight>
            <Text>
              {weight}
              <span> kg</span>
            </Text>
            <ControlPanelButton onClick={openWeightMenu}>
              <SvgWrapper>
                <use href={sprite + '#icon-edit-2'} />
              </SvgWrapper>
            </ControlPanelButton>
          </TextWrapperWeight>
        </div>

        {showWeightMenu && (
          <>
            <div>component СurrentWeightModal OR popup mui</div>
            <button onClick={closeWeightMenu}> </button>
          </>
        )}
      </Weight>
    </WrapperControlPanel>
  );
};
