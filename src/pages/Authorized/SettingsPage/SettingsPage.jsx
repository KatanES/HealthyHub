import UserInformation from '../../../components/AuthorizedUser/UserInformation';
import HeroImg from '../../../assets/Settings/settings-hero.svg';
import {
  SettingsTitle,
  ContainerSetting,
  ContainerImg,
  SettingsImg,
} from './SettingsPage.styled';

const SettingsPage = () => {
  return (
    <div>
      <SettingsTitle>Profile setting</SettingsTitle>
      <ContainerSetting>
        <ContainerImg>
          <SettingsImg src={HeroImg} alt="Settings Hero Image" />
        </ContainerImg>
        <UserInformation />
      </ContainerSetting>
    </div>
  );
};

export default SettingsPage;
