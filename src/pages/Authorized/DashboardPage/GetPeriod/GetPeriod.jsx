import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useState } from 'react';
import { DataBtn, CalendarGlobalStyles } from './GetPeriod.styled';

const DatePeriod = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const CustomInput = ({ value, onClick }) => (
    <DataBtn className="custom-datepicker-input" onClick={onClick}>
      {value || 'Select Month'}
    </DataBtn>
  );

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MMMM"
        showMonthYearPicker
        customInput={<CustomInput />}
        //   calendarClassName="horizontal-calendar"
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default DatePeriod;
