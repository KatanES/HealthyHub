import Breakfast from '../../DiaryPage/Breakfast';
import Lunch from '../../DiaryPage/Lunch';
import Dinner from '../../DiaryPage/Dinner';
import Snack from '../../DiaryPage/Snack';
import {
  SectionDiary,
  ItemTitelDiary,
  TextDiary,
  TitelDiary,
  ItemDiary,
} from './Diary.styled';

const Diary = () => {
  return (
    <SectionDiary>
      <ItemTitelDiary>
        <TitelDiary>Diary</TitelDiary>
        <TextDiary>See more</TextDiary>
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
