import sprite from '../../../assets/sprite.svg';

import {
  IconSelectWrapper,
  SvgWrapper,
  Title,
  Text,
  ControlPanelButton,
  TextWrapperWeight,
  ButtonTextContainer,
} from './ControlPanel.styled';

export const Weight = ({ openWeightMenu, weightIcon, weight }) => {
  return (
    <ControlPanelButton onClick={openWeightMenu}>
      <IconSelectWrapper>
        <img src={weightIcon} alt="current user`s weight" />
      </IconSelectWrapper>
      <ButtonTextContainer>
        <Title>Weight</Title>
        <TextWrapperWeight>
          <Text>
            {weight}
            <span> kg</span>
          </Text>

          <SvgWrapper>
            <use href={sprite + '#icon-edit-2'} />
          </SvgWrapper>
        </TextWrapperWeight>
      </ButtonTextContainer>
    </ControlPanelButton>
  );
};
