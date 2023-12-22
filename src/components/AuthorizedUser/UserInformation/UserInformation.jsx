import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import {
  FormStyle,
  FormLabel,
  FormInput,
  FormInputRadio,
  SettingsContainer,
  FormSaveBtn,
  FromCancelBtn,
} from './UserInformation.styled';

const settingsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  age: Yup.string().max(3, 'Too Long!').required('Required'),
  gender: Yup.string(),
  height: Yup.string(),
  weight: Yup.string(),
  activity: Yup.string(),
});

const activities = [
  {
    value: '1',
    label: '1.2 - If you do not have physical activity and sedentary work',
  },
  {
    value: '2',
    label: '1.375 - If you do short runs or light gymnastics 1-3 times a week',
  },
  {
    value: '3',
    label: '1.55 - If you play sports with average loads 3-5 times a week',
  },
  {
    value: '4',
    label: '1.725 - If you train fully 6-7 times a week',
  },
  {
    value: '5',
    label:
      '1.9 - If your work is related to physical labor, you train 2 times a day and include strength exercises in your training program',
  },
];

const SettingsPage = () => {
  const [userData, setUserData] = useState({});
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/current');
        setUserData(response.data);
        if (response.data.avatar) {
          setAvatarUrl(URL.createObjectURL(response.data.avatar));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: userData.name || '',
      avatar: null,
      age: userData.age || '',
      gender: userData.gender || 'male',
      height: userData.height || '',
      weight: userData.weight || '',
      activity: userData.activity || '1',
    },
    validationSchema: settingsSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('avatar', values.avatar);
      formData.append('age', values.age);
      formData.append('gender', values.gender);
      formData.append('height', values.height);
      formData.append('weight', values.weight);
      formData.append('activity', values.activity);

      try {
        const response = await axios.put('/api/user/update', formData);
        console.log('User data updated:', response.data);
        setUserData(response.data);
        if (response.data.avatar) {
          setAvatarUrl(URL.createObjectURL(response.data.avatar));
        }
      } catch (error) {
        console.error('Error updating user data:', error);
      }
    },
  });

  const handleAvatarChange = (event) => {
    formik.setFieldValue('avatar', event.currentTarget.files[0]);
    setAvatarUrl(URL.createObjectURL(event.currentTarget.files[0]));
  };

  return (
    <SettingsContainer>
      <FormStyle onSubmit={formik.handleSubmit}>
        <FormLabel>
          Your name
          <FormInput
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </FormLabel>

        <FormLabel>
          Your photo
          <div>
            <img src={avatarUrl} alt="Avatar" />
            {/* {avatarUrl && <img src={avatarUrl} alt="Avatar" />} */}
            {/* {avatarUrl ? <img src={avatarUrl} alt="Avatar" /> : defaultAvatar } */}
            <FormInput
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
            />
          </div>
        </FormLabel>

        <FormLabel>
          Your age
          <FormInput
            type="text"
            name="age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
        </FormLabel>

        <FormLabel>
          Gender
          <div>
            <FormInputRadio
              type="radio"
              name="gender"
              value="male"
              checked={formik.values.gender === 'male'}
              onChange={formik.handleChange}
            />
            Male
            <FormInputRadio
              type="radio"
              name="gender"
              value="female"
              checked={formik.values.gender === 'female'}
              onChange={formik.handleChange}
            />
            Female
          </div>
        </FormLabel>

        <FormLabel>
          Height
          <FormInput
            type="text"
            name="height"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.height}
          />
        </FormLabel>

        <FormLabel>
          Weight
          <FormInput
            type="text"
            name="weight"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.weight}
          />
        </FormLabel>

        <FormLabel>
          Your activity
          {activities.map((activity) => (
            <div key={activity.value}>
              <FormInputRadio
                type="radio"
                name="activity"
                value={activity.value}
                checked={formik.values.activity === activity.value}
                onChange={formik.handleChange}
              />
              {activity.label}
            </div>
          ))}
        </FormLabel>

        <div>
          <FormSaveBtn type="submit">Save</FormSaveBtn>
          <FromCancelBtn type="button" onClick={formik.handleReset}>
            Cancel
          </FromCancelBtn>
        </div>
      </FormStyle>
    </SettingsContainer>
  );
};

export default SettingsPage;
