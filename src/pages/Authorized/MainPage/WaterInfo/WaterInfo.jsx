import { useEffect, useState } from 'react';
import { WaterChart } from '../../../../components/WaterChart/WaterChart';
import { selectUser } from '../../../../redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { addWaterIntake } from '../../../../redux/DailyWater/operations';
import { deletedWaterIntake } from '../../../../redux/DailyWater/operations';
import { selectWaterIntake } from '../../../../redux/DailyWater/selectors';

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
  const user = useSelector(selectUser);
  const dailyWaterIntake = user?.rateWater ? user.rateWater * 1000 : 0;
  const leftWaterIntake = dailyWaterIntake - waterConsumption;
  console.log('DAILY', dailyWaterIntake);
  console.log('CONSUM', waterConsumption);
  console.log('LEFT PART', leftWaterIntake);

  const waterPercent =
    waterConsumption <= leftWaterIntake
      ? Math.round((waterConsumption * 100) / leftWaterIntake)
      : 100;

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
              <LeftNumber>{Math.max(leftWaterIntake, 0)}</LeftNumber>
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

