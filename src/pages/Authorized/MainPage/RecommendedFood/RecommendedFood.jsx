import { useSelector } from 'react-redux';
import { RecommendedCard } from '../../../../components/AuthorizedUser/RecommendedFood/RecommendedCard';
import {
  FoodCardsWrap,
  RecommendedFoodSection,
  Title,
  LinkToRecomFood,
} from './RecommendedFood.styled';

import { randomArray } from '../../../../utils/randomArray';
import { getRecommendedFood } from '../../../../redux/recommendedFood/selectors';

export const RecommendedFood = () => {
  const recommendedFood = useSelector(getRecommendedFood);

  const arrayForRender = randomArray(recommendedFood);

  return (
    <RecommendedFoodSection>
      <Title>Recommended food</Title>
      <FoodCardsWrap>
        {arrayForRender.map((item) => (
          <RecommendedCard key={item.name} info={item} />
        ))}
      </FoodCardsWrap>
      <LinkToRecomFood to="/recommended-food">
        See more
        {/* <ArrowRigth /> */}
      </LinkToRecomFood>
    </RecommendedFoodSection>
  );
};
