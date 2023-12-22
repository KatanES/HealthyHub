import { Link } from 'react-router-dom';
import Breakfast from '../../../AuthorizedUser/DiaryPage/Breakfast.jsx';
import Lunch from '../../../AuthorizedUser/DiaryPage/Lunch';
import Dinner from '../../../AuthorizedUser/DiaryPage/Dinner';
import Snack from '../../../AuthorizedUser/DiaryPage/Snack';
import {
  SectionDiary,
  ItemTitelDiary,
  TextDiary,
  TitelDiary,
    ItemDiary
} from '../Diary/Diary.styled';

const Diary = () => {
  return (
    <SectionDiary>
      <ItemTitelDiary>
        <TitelDiary>Diary</TitelDiary>
        <Link to="/diary">
          <TextDiary>See more</TextDiary>
        </Link>
      </ItemTitelDiary>
      <ItemDiary>
          <Breakfast />
          <Lunch />
          <Dinner />
          <Snack />
      </ItemDiary>
    </SectionDiary>
  );
};

export default Diary;
