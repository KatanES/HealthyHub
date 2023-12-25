import { ReactComponent as BubbleSvg } from '../../../../assets/icons/bubble.svg';
import { ReactComponent as MilkSvg } from '../../../../assets/icons/milk.svg';
import {
  InfoTitle,
  DailyInfoCard,
  Title,
  InfoCardWrapper,
  InfoNumber,
  Unit,
  InfoWrapper,
} from './DailyGoal.styled';

export const DailyGoalInfo = ({ dailyCalories, dailyWaterIntake }) => {
  return (
    <div>
      <Title>Daily goal</Title>
      <DailyInfoCard>
        <InfoCardWrapper>
          <BubbleSvg />
          <InfoWrapper>
            <InfoTitle>Calories</InfoTitle>
            <InfoNumber>{dailyCalories}</InfoNumber>
          </InfoWrapper>
          <MilkSvg />
          <InfoWrapper>
            <InfoTitle>Water</InfoTitle>
            <InfoNumber>
              {dailyWaterIntake} 
              <Unit>ml</Unit>
            </InfoNumber>
          </InfoWrapper>
        </InfoCardWrapper>
      </DailyInfoCard>
    </div>
  );
};
