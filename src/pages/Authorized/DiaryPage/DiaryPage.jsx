import { Route, Switch } from 'react-router-dom';
import Breakfast from '../../../components/AuthorizedUser/DiaryPage/Breakfast';
import Lunch from '../../../components/AuthorizedUser/DiaryPage/Lunch';
import Dinner from '../../../components/AuthorizedUser/DiaryPage/Dinner';
import Snack from '../../../components/AuthorizedUser/DiaryPage/Snack';

const DiaryPage = () => {
  return (
    <div>
      <h1>Diary Page</h1>
      <Switch>
        <Route path="/diary/breakfast" component={Breakfast} />
        <Route path="/diary/lunch" component={Lunch} />
        <Route path="/diary/dinner" component={Dinner} />
        <Route path="/diary/snack" component={Snack} />
      </Switch>
    </div>
  );
};

export default DiaryPage;
