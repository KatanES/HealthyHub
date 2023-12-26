import { useEffect } from 'react';
import { WaterChart } from '../../../../components/WaterChart/WaterChart';
import {
  InfoTitle,
  WaterInfoCard,
  WaterTitle,
  InfoNumber,
  Unit,
  InfoWrapper,
  Level,
  LeftInfo,
  LeftNumber,
  Button,
  AddIcon,
  ValueWrap,
  WaterBar,
  WaterPercentage,
} from '../WaterInfo/WaterInfo.styled';

import { bubbles } from '../../../../utils/bubbles';

export const WaterInfo = ({ handleModal, waterConsumption }) => {
  

  const leftWaterIntake = 1500 - waterConsumption;

  const waterPercent =
    waterConsumption <= 1500 ? Math.round((waterConsumption * 100) / 1500) : 100;

    useEffect(() => {
      console.log('Water Consumption in MainPage:', waterConsumption);
    }, [waterConsumption]);

  const offset =
    waterPercent <= 84 ? Math.ceil((waterPercent / 100) * 176 + 10) : 88;
  const percentColor = waterPercent <= 85 ? 'rgba(182, 195, 255, 1)' : 'green';

  useEffect(() => {
    const bubbleId = setInterval(bubbles, 1000);
    return () => {
      clearInterval(bubbleId);
    };
  }, []);
 
  return (
    <div>
      <WaterTitle>Water</WaterTitle>
      <WaterInfoCard>
        <Level>
          <WaterBar id="bubbles">
            <WaterPercentage
              $offset={offset}
              $percentColor={percentColor}
            >{`${waterPercent}%`}</WaterPercentage>
            <WaterChart waterIntake={waterPercent} />
          </WaterBar>
        </Level>
        <InfoWrapper>
          <InfoTitle>Water consumption</InfoTitle>
          <ValueWrap>
            <InfoNumber>
              {waterConsumption} <Unit>ml</Unit>
            </InfoNumber>
            <LeftInfo>
              left:
              <LeftNumber>
                {leftWaterIntake > 0 ? leftWaterIntake : 0}
              </LeftNumber>
              <Unit>ml</Unit>
            </LeftInfo>
          </ValueWrap>
          <Button onClick={handleModal}>
            <AddIcon />
            Add water intake
          </Button>
        </InfoWrapper>
      </WaterInfoCard>
    </div>
  );
};
