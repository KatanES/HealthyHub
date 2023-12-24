import { useDispatch, useSelector } from 'react-redux';
import { getRecommendedFood } from '../../../redux/recommendedFood/selectors';
import { fetchRecommendedFood } from '../../../redux/recommendedFood/operations';
import { RecommendedCard } from '../../../components/AuthorizedUser/RecommendedFood/RecommendedCard';
RecommendedCard;
import { randomArray } from '../../../utils/randomArray';
import RecommendedFoodPhoto from '../../../assets/RecommendedFood/Ketogenic.png';
import { useEffect } from 'react';

import {
  RecommendedFood,
  Title,
  DesctopContainer,
  StyledImg,
  ProductsList,
} from './RecommendedFoodPage.styled';

const RecommendedFoodPage = () => {
  const dispatch = useDispatch();
  const recommendedFood = useSelector(getRecommendedFood);

  useEffect(() => {
    dispatch(fetchRecommendedFood());
  }, []);
  return (
    <RecommendedFood>
      <Title>Recommended Food</Title>
      <DesctopContainer>
        <StyledImg
          srcSet={`${RecommendedFoodPhoto} 1x`}
          src={RecommendedFoodPhoto}
          alt="Profile Setting Photo"
        ></StyledImg>
        {recommendedFood && (
          <ProductsList>
            {randomArray(recommendedFood, 10).map((product) => (
              <RecommendedCard key={product.name} info={product} />
            ))}
          </ProductsList>
        )}
      </DesctopContainer>
    </RecommendedFood>
  );
};

export default RecommendedFoodPage;
