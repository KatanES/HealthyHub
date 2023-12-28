import { useEffect, useState } from 'react';
import { WaterChart } from '../../../../components/WaterChart/WaterChart';
import { selectUser } from '../../../../redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';

import { deletedWaterIntake } from '../../../../redux/DailyWater/operations';
import symbol from '../../../../assets/Welcome/symbol.svg'

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
  SVG,
  DelButton,
} from '../WaterInfo/WaterInfo.styled';

import { bubbles } from '../../../../utils/bubbles';

export const WaterInfo = ({ handleModal, waterConsumption }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const dailyWaterIntake = user?.rateWater ? user.rateWater * 1000 : 0;
  const leftWaterIntake = dailyWaterIntake - waterConsumption > 0 ? dailyWaterIntake - waterConsumption : 0;

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
  const handleResetWaterIntake = () => {
    console.log('Resetting water intake...');
    dispatch(deletedWaterIntake(waterConsumption));
  };

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
          <DelButton type="button" onClick={handleResetWaterIntake}> <SVG>
                      <use href={symbol + '#icon-trash-03'} />
                    </SVG></DelButton>
        </InfoWrapper>
      </WaterInfoCard>
    </div>
  );
};

