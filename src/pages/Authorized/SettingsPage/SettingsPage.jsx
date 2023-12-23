import UserInformation from '../../../components/AuthorizedUser/UserInformation';
import HeroImg from '../../../assets/Settings/settings-hero.svg'
import {
  SettingsTitle,
  ContainerImg,
  SettingsImg,
} from './SettingsPage.styled';

const SettingsPage = () => {
  return (
    <div>
      <SettingsTitle>Profile setting</SettingsTitle>
      <ContainerImg>
        <SettingsImg src={HeroImg} alt="Settings Hero Image" />
      </ContainerImg>
      <UserInformation />
    </div>
  );
};

export default SettingsPage;
