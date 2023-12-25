import { Container } from './DashboardPage.styled';
import Calories from './Calories/Calories';
import Water from './Water/Water';
// import DatePeriod from './GetPeriod/GetPeriod';

const DashboardPage = () => {
  return (
    <>
      {/* <DatePeriod /> */}
      <Container>
        <Calories />
        <Water />
      </Container>
    </>
  );
};

export default DashboardPage;
