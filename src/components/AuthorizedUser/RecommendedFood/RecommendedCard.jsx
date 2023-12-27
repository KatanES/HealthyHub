import {
  Card,
  CardImage,
  InfoWrap,
  Title,
  ValueWrap,
  Calories,
} from './RecommendedCard.styled';

export const RecommendedCard = ({ info }) => {
  const { name, amount, img: image, calories } = info;

  return (
    <Card>
      <CardImage src={image} alt="name"></CardImage>
      <InfoWrap>
        <Title>{name}</Title>
        <ValueWrap>
          <p>{amount}</p>
          <Calories>{calories} calories</Calories>
        </ValueWrap>
      </InfoWrap>
    </Card>
  );
};
