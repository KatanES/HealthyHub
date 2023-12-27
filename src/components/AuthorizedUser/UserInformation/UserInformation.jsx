import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from '../../../redux/auth/selectors';
import { currentUser, updateUserInfo } from '../../../redux/auth/operations';

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
  activity: Yup.number().required('Activity is required'),
});

const SettingsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [avatarURL, setAvatarURL] = useState(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    dispatch(currentUser(user));
  }, [dispatch, user]);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAvatarChange = (event) => {
    setAvatarURL(URL.createObjectURL(event.currentTarget.files[0]));
  };

  const handleSubmit = (values) => {
    dispatch(updateUserInfo(values));
  };

  const handleCancel = () => {
    setAvatarURL(null);
    dispatch(currentUser(user));
  };

  const initialValues = {
    name: user.name ?? '',
    avatar: user.avatarURL ?? null,
    age: user.age ?? '',
    gender: user.gender ?? 'male',
    height: user.height ?? '',
    weight: user.weight ?? '',
    activity: String(user.activity) ?? '1',
  };

  return (
    <SettingsContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={settingsSchema}
      >
        {({ handleChange, values }) => (
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
                    {avatarURL ? (
                      <Avatar src={avatarURL} alt="User Avatar" />
                    ) : (
                      <Avatar src={values.avatar} alt="User Avatar" />
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
              <FormCancelBtn type="button" onClick={handleCancel}>
                Cancel
              </FormCancelBtn>
            </ContainerBtn>
          </FormStyle>
        )}
      </Formik>
    </SettingsContainer>
  );
};

export default SettingsPage;
