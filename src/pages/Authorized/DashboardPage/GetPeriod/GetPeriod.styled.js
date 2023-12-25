import { createGlobalStyle, styled } from 'styled-components';
import { globalColor } from '../../../../components/Header/root';

export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  /* background: #3e85f3; */
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__month-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;

  }

  .react-datepicker {

    
    left: 50%;
    top: 15%;
    color: white;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 212x;
    height: 144px;
    padding: 9px 18px;
    background-color: ${globalColor.colorPrimaryBlack};
    font-family: Inter;
    border-radius: 16px;
  }
  .react-datepicker__month-container {
    overflow: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

.react-datepicker__month-container::-webkit-scrollbar {
  width: 1px;
}

.react-datepicker__month-container::-webkit-scrollbar-track {
  background-color: ${globalColor.colorPrimaryGreen};
}


.react-datepicker__month-container::-webkit-scrollbar-thumb {
  background-color: ${globalColor.colorPrimaryViolet};

  border-radius: 6px;
}

.react-datepicker__month-container::-webkit-scrollbar-thumb:hover {
  background-color: ${globalColor.colorPrimaryGreen};
}




  .react-datepicker__header {
    position: relative;
    background-color: #3e85f3;
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }

  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
  }

  .react-datepicker__navigation {

    color: white;
  }
  .react-datepicker__navigation--previous {
    display: none;
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    display: none;
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
 
  .react-datepicker__month {
    display: flex;
   
    flex-direction: column;
    
  }
  .react-datepicker__day--selected {
    background-color:white;
    color:#3e85f3;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;
