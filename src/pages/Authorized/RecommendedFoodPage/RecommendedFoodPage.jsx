// import { useDispatch, useSelector } from 'react-redux';
// import { getRecommendedFood } from '../../../redux/recommendedFood/selectors';
// import { fetchRecommendedFood } from '../../../redux/recommendedFood/operations';
// import { RecommendedCard } from '../../../components/AuthorizedUser/RecommendedFood/RecommendedCard';
// RecommendedCard;
// import { randomArray } from '../../../utils/randomArray';
// import RecommendedFoodPhoto from '../../../assets/RecommendedFood/Ketogenic.png';

// export const RecommendedFoodPage = () => {
//   const dispatch = useDispatch();
//   const recommendedFood = useSelector(getRecommendedFood);

//   if (!recommendedFood) {
//     dispatch(fetchRecommendedFood());
//   }

//   return (
//     <div>
//       <h1>Recommended Food</h1>
//       <div>
//         <img
//           srcSet={`${RecommendedFoodPhoto} 1x`}
//           src={RecommendedFoodPhoto}
//           alt="Profile Setting Photo"
//         ></img>
//         {recommendedFood && (
//           <ul>
//             {randomArray(recommendedFood, 10).map((product) => (
//               <RecommendedCard key={product.name} info={product} />
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };
