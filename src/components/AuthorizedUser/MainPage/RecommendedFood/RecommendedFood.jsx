import { useState, useEffect } from 'react';

import CardRecommendedProduct from '../../../CardRecommendedProduct.styled.jsx/CardRecommendedProduct';
import {
  RecommendedFoodSection,
  TitleSection,
  RecommendedFoodList,
  SeeMoreButton,
} from '../../../AuthorizedUser/MainPage/RecommendedFood/RecommendedFood.styled.jsx';

import { getRecommentedFood } from '../../../../helpers/getRecommentedFood.js';
import { randomizeFood } from '../../../../helpers/randomizeFood.js';

const RecommendedFoodOnMain = () => {
  const [arrayForRender, setArrayForRender] = useState([]);

  useEffect(() => {
    getRecommentedFood()
      .then((responce) => {
        setArrayForRender(randomizeFood(responce));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <RecommendedFoodSection>
      <TitleSection>Recommended food</TitleSection>
      <RecommendedFoodList>
        {arrayForRender.map(({ _id, img, name, amount, calories }) => (
          <CardRecommendedProduct
            key={_id}
            id={_id}
            img={img}
            name={name}
            amount={amount}
            calories={calories}
          />
        ))}
      </RecommendedFoodList>
      <SeeMoreButton to="/recommended-food">See more</SeeMoreButton>
    </RecommendedFoodSection>
  );
};

export default RecommendedFoodOnMain;
