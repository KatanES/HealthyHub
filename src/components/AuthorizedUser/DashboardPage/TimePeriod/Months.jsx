import { Container } from './Months.styled';
import { getCurrentMonths, getLastYearMonths } from './GetMonth';
import { useState } from 'react';

const MonthsDash = ({ onChange }) => {
  const [selectedValue, setSelectedValue] = useState({
    value: getCurrentMonths(),
    label: getLastYearMonths()[getCurrentMonths()],
  });

  function getIndexOfMonth(month) {
    return getLastYearMonths().findIndex((obj) => obj === month);
  }

  const handleSelectChange = (e) => {
    const selectedMonth = {
      value: getIndexOfMonth(e.target.value),
      label: e.target.value,
    };
    setSelectedValue(selectedMonth);
    onChange(selectedMonth);
  };

  return (
    <Container>
      <label>MONTH: </label>
      <select value={selectedValue.label} onChange={handleSelectChange}>
        {getLastYearMonths().map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default MonthsDash;
