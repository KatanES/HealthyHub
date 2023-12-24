import noImage from '../../../assets/RecommendedFood/noimage.png';

export const RecommendedCard = ({ info }) => {
  const { name, amount, img: image, calories } = info;
  const onError = (e) => (e.target.src = noImage);

  return (
    <div>
      <img src={image} alt="name" onError={(e = onError(e))}></img>
      <div>
        <h2>{name}</h2>
        <div>
          <p>{amount}</p>
          <p>{calories}</p>
        </div>
      </div>
    </div>
  );
};
