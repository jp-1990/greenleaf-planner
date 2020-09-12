import React, { useContext, useState } from 'react';
import { monthOverflowCheck } from '../DateOperations/dateOperations';

// current year
const activeYear = new Date(Date.now()).getFullYear();

// get first monday of given month in given year
const getFirstMonday = (year, month) => {
  for (let i = 1; i < 8; i++) {
    if (new Date(year, month, i).getDay() === 1) {
      return i;
    }
  }
};

// current week of the year
const curWeek = () => {
  const start = new Date(activeYear, 0, getFirstMonday(activeYear, 1));
  const now = new Date(Date.now());
  const numberOfDays = Math.floor((now - start) / (24 * 60 * 60 * 1000));
  return Math.ceil(numberOfDays / 7) + 1;
};

// populate an array of all the weeks in the given year
const weeks = (year) => {
  const result = [];
  // iterate through months
  for (let i = 0; i < 12; i++) {
    // get first monday of the month
    let monday = getFirstMonday(year, i);
    //iterate through days in month and add mondays to array
    for (let j = 1; j <= new Date(year, i + 1, 0).getDate(); j++) {
      if (j === monday) {
        result.push({
          year: year,
          month: i,
          dates: {
            monday: j,
            tuesday: monthOverflowCheck(j + 1, i, year).date,
            wedneday: monthOverflowCheck(j + 2, i, year).date,
            thursday: monthOverflowCheck(j + 3, i, year).date,
            friday: monthOverflowCheck(j + 4, i, year).date,
            saturday: monthOverflowCheck(j + 5, i, year).date,
          },
        });
        // add 7 to monday to get the following monday
        monday += 7;
      }
    }
  }
  return result;
};

// generate array of weeks from prev, current and next years
const weeksPrevCurNextYear = (year) => {
  return [...weeks(year - 1), ...weeks(year), ...weeks(year + 1)];
};

const WeeksContext = React.createContext();
const SelectedWeekContext = React.createContext();

export const useWeeks = () => {
  return useContext(WeeksContext);
};

export const useSelectedWeek = () => {
  return useContext(SelectedWeekContext);
};

export const WeeksProvider = ({ children }) => {
  const [activeWeek, setActiveWeek] = useState(50 + curWeek());
  const weeksArray = weeksPrevCurNextYear(activeYear);

  return (
    <WeeksContext.Provider value={weeksArray}>
      <SelectedWeekContext.Provider value={[activeWeek, setActiveWeek]}>
        {children}
      </SelectedWeekContext.Provider>
    </WeeksContext.Provider>
  );
};
