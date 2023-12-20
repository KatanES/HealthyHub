import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

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
      age: userData.age || '',
      gender: userData.gender || 'male',
      height: userData.height || '',
      weight: userData.weight || '',
      activity: userData.activity || '1.2',
      avatar: null,
    },
    onSubmit: async (values) => {
      // Створення об'єкту FormData для відправлення на бек-енд
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('age', values.age);
      formData.append('gender', values.gender);
      formData.append('height', values.height);
      formData.append('weight', values.weight);
      formData.append('activity', values.activity);
      if (values.avatar) {
        formData.append('avatar', values.avatar);
      }

      try {
        // Відправка запиту на бек-енд для оновлення інформації про користувача
        const response = await axios.put('/api/user/update', formData);
        console.log('User data updated:', response.data);
        // Оновлення стану користувача та URL аватарки
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
    <div>
      <h1>Profile Settings</h1>
      {/* <img src={heroSvg} alt="Hero Image" /> */}
      <form onSubmit={formik.handleSubmit}>
        {/* User Information Component */}
        <label>Your name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />

        <label>Your photo</label>
        <input type="file" accept="image/*" onChange={handleAvatarChange} />
        {avatarUrl && <img src={avatarUrl} alt="Avatar" />}

        <label>Your age</label>
        <input
          type="text"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />

        {/* Gender radio buttons */}
        <label>Gender</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formik.values.gender === 'male'}
            onChange={formik.handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formik.values.gender === 'female'}
            onChange={formik.handleChange}
          />
          Female
        </div>

        {/* Height and Weight inputs */}
        <label>Height</label>
        <input
          type="text"
          name="height"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.height}
        />

        <label>Weight</label>
        <input
          type="text"
          name="weight"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.weight}
        />

        {/* Activity radio buttons */}
        <label>Your activity</label>
        <div>{/* Render radio buttons for activity levels */}</div>

        {/* Save and Cancel buttons */}
        <button type="submit">Save</button>
        <button type="button" onClick={formik.handleReset}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
