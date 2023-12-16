import { Route, Switch } from 'react-router-dom';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Snack from './Snack';

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
