import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from '../../../redux/auth/selectors';
import {
  currentUser,
  updateUserInfo,
  updAvatar,
} from '../../../redux/auth/operations';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  FormStyle,
  ContainerBigScreen,
  WrapperContainerBigScreen,
  FormLabel,
  FormInput,
  SettingsContainer,
  TitleRadio,
  WrapperSection,
  ContainerAvatar,
  Avatar,
  DefaultAvatarWrapper,
  AvatarUpload,
  InputFile,
  SvgUpload,
  SpanUpload,
  ContainerGender,
  GenderLabel,
  RadioBtn,
  ContainerActivity,
  ActivityLabel,
  ContainerBtn,
  FormSaveBtn,
  FormCancelBtn,
} from './UserInformation.styled';
import sprite from '../../../assets/sprite.svg';

const settingsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  age: Yup.number('Must be a number from 1 to 200')
    .label('Age')
    .min(1, 'Must be a number from 1 to 200')
    .max(200, 'Must be a number from 1 to 200')
    .required('Age is required'),
  gender: Yup.string().required('Choose one of these fields'),
  avatar: Yup.string(),
  height: Yup.number()
    .positive('Must be a positive number')
    .label('Height')
    .min(1, 'Must be a number from 1 to 300')
    .max(300, 'Must be a number from 1 to 300')
    .required('Height is required'),
  weight: Yup.number()
    .positive('Must be a positive number')
    .label('Weight')
    .min(1, 'Must be a number from 1 to 500')
    .max(500, 'Must be a number from 1 to 500')
    .required('Weight is required'),
  activity: Yup.number(),
});

const SettingsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [avatarUrl, setAvatarUrl] = useState(user.avatarURL);

  const fileInputRef = useRef(null);

  useEffect(() => {
    dispatch(currentUser(user));
  }, [dispatch, user]);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const initialValues = {
    name: user.name ?? '',
    avatar: user.avatarURL ?? null, // може видалити?
    age: user.age ?? '',
    gender: user.gender ?? 'male',
    height: user.height ?? '',
    weight: user.weight ?? '',
    activity: user.activity ?? '1',
  };

  // const handleAvatarChange = (event) => {
  //   setAvatarUrl(URL.createObjectURL(event.currentTarget.files[0]));

  //   try {
  //     dispatch(updAvatar(event.currentTarget.files[0]));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleAvatarChange = (event) => {
    setAvatarUrl(URL.createObjectURL(event.currentTarget.files[0]));
  };

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('avatarURL', values.avatar);
    formData.append('age', values.age);
    formData.append('gender', values.gender);
    formData.append('height', values.height);
    formData.append('weight', values.weight);
    formData.append('activity', values.activity);

    dispatch(updateUserInfo(values));
  };

  return (
    <SettingsContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={settingsSchema}
      >
        {({ handleChange, values, onReset }) => (
          <FormStyle>
            <WrapperContainerBigScreen>
              <ContainerBigScreen>
                <FormLabel>
                  Your name
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </FormLabel>

                <WrapperSection>
                  <FormLabel>Your photo</FormLabel>
                  <ContainerAvatar>
                    {avatarUrl ? (
                      <Avatar src={values.avatar} alt="User Avatar" />
                    ) : (
                      <DefaultAvatarWrapper>
                        <use href={`${sprite}#icon-profile-circle`} />
                      </DefaultAvatarWrapper>
                    )}
                    <AvatarUpload>
                      <InputFile
                        type="file"
                        name="avatarUrl"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleAvatarChange}
                      />
                      <div
                        onClick={handleIconClick}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          cursor: 'pointer',
                        }}
                      >
                        <SvgUpload width="16" height="16">
                          <use href={`${sprite}#icon-direct-inbox`} />
                        </SvgUpload>
                        <SpanUpload>Download new photo</SpanUpload>
                      </div>
                    </AvatarUpload>
                  </ContainerAvatar>
                </WrapperSection>
              </ContainerBigScreen>

              <ContainerBigScreen>
                <FormLabel>
                  Your age
                  <FormInput
                    type="number"
                    id="age"
                    name="age"
                    value={values.age}
                    onChange={handleChange}
                  />
                </FormLabel>

                <WrapperSection>
                  <TitleRadio>Gender</TitleRadio>
                  <ContainerGender>
                    <GenderLabel>
                      <RadioBtn
                        type="radio"
                        name="gender"
                        value="male"
                        checked={values.gender === 'male'}
                        onChange={handleChange}
                      />
                      Male
                    </GenderLabel>
                    <GenderLabel>
                      <RadioBtn
                        type="radio"
                        name="gender"
                        value="female"
                        checked={values.gender === 'female'}
                        onChange={handleChange}
                      />
                      Female
                    </GenderLabel>
                  </ContainerGender>
                </WrapperSection>
              </ContainerBigScreen>

              <ContainerBigScreen>
                <FormLabel>
                  Height
                  <FormInput
                    type="number"
                    id="height"
                    name="height"
                    value={values.height}
                    onChange={handleChange}
                  />
                </FormLabel>

                <FormLabel>
                  Weight
                  <FormInput
                    type="number"
                    id="weight"
                    name="weight"
                    value={values.weight}
                    onChange={handleChange}
                  />
                </FormLabel>
              </ContainerBigScreen>
            </WrapperContainerBigScreen>

            <div>
              <TitleRadio>Your activity</TitleRadio>
              <ContainerActivity>
                <ActivityLabel>
                  <RadioBtn
                    type="radio"
                    name="activity"
                    value="1"
                    checked={values.activity === '1'}
                    onChange={handleChange}
                  />
                  1.2 - if you do not have physical activity and sedentary work
                </ActivityLabel>
                <ActivityLabel>
                  <RadioBtn
                    type="radio"
                    name="activity"
                    value="2"
                    checked={values.activity === '2'}
                    onChange={handleChange}
                  />
                  1.375 - if you do short runs or light gymnastics 1-3 times a
                  week
                </ActivityLabel>
                <ActivityLabel>
                  <RadioBtn
                    type="radio"
                    name="activity"
                    value="3"
                    checked={values.activity === '3'}
                    onChange={handleChange}
                  />
                  1.55 - if you play sports with average loads 3-5 times a week
                </ActivityLabel>
                <ActivityLabel>
                  <RadioBtn
                    type="radio"
                    name="activity"
                    value="4"
                    checked={values.activity === '4'}
                    onChange={handleChange}
                  />
                  1.725 - if you train fully 6-7 times a week
                </ActivityLabel>
                <ActivityLabel>
                  <RadioBtn
                    type="radio"
                    name="activity"
                    value="5"
                    checked={values.activity === '5'}
                    onChange={handleChange}
                  />
                  1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program
                </ActivityLabel>
              </ContainerActivity>
            </div>

            <ContainerBtn>
              <FormSaveBtn type="submit">Save</FormSaveBtn>
              <FormCancelBtn type="button">Cancel</FormCancelBtn>
            </ContainerBtn>
          </FormStyle>
        )}
      </Formik>
    </SettingsContainer>
  );
};

export default SettingsPage;
