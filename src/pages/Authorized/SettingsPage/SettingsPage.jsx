import UserInformation from '../../../components/AuthorizedUser/UserInformation';
import HeroImg from '../../../assets/Settings/settings-hero.svg'

const SettingsPage = () => {
  return (
    <div>
      <h2>Profile setting</h2>
      <img src={HeroImg} alt="Hero Image" />
      <UserInformation />
    </div>
  );
};

export default SettingsPage;
