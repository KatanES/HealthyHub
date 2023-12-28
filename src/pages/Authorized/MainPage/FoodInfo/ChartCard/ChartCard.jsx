import { DoughnutChart } from '../../../../../components/DoughnutChart/DoughnutChart';
import {
  ChartWrapper,
  ChartElement,
  InfoWrapper,
  ElementsTitle,
  ValueWrap,
  GoalWrap,
  Value,
  Percentage,
  LeftValue,
  PerValue,
} from './ChartCard.styled';

export const ChartCard = (props) => {
  const { title, chartBcg, elementGoal, elementValue } = props;

  let left = elementGoal - elementValue;
  if (left < 0) {
    left = 0;
  }
  let elementPercentage = Math.round((elementValue * 100) / elementGoal);

  if (elementPercentage === Infinity || isNaN(elementPercentage)) {
    elementPercentage = 0;
  }

  if (elementPercentage > 100) {
    elementPercentage = 100;
  }

  return (
    <>
      <ChartWrapper>
        <ChartElement>
          <DoughnutChart
            dailyCalories={elementGoal}
            inputValue={elementValue}
            chartBcg={chartBcg}
          />
          <Percentage>
            <PerValue>{`${elementPercentage}%`}</PerValue>
          </Percentage>
        </ChartElement>
        <InfoWrapper>
          <ElementsTitle>{title}</ElementsTitle>
          <ValueWrap>
            <GoalWrap>
              Goal: <Value>{elementGoal}</Value>
            </GoalWrap>
            <LeftValue>
              left: <Value>{left}</Value>
            </LeftValue>
          </ValueWrap>
        </InfoWrapper>
      </ChartWrapper>
    </>
  );
};
