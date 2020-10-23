import React, { useContext, useState } from 'react';

// current year
const activeYear = new Date(Date.now()).getFullYear();

// current date (midnight)
const today = new Date(
  activeYear,
  new Date(Date.now()).getMonth(),
  new Date(Date.now()).getDate()
);

// get array of all dates in given year
const getAllDatesInYear = (year) => {
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  const datesArray = [];
  for (
    let date = new Date(start);
    date <= end;
    date.setDate(date.getDate() + 1)
  ) {
    datesArray.push(new Date(date));
  }
  return datesArray;
};

// create an array of all weeks in the given year
const weeksInYear = (year) => {
  const datesArray = getAllDatesInYear(year);
  const startingIndex = datesArray.findIndex((el) => el.getDay() === 1);
  const output = [];
  for (let i = startingIndex; i <= datesArray.length; i += 7) {
    let weekStart = new Date(datesArray[i]);
    output.push({
      monday: datesArray[i],
      tuesday: new Date(weekStart.setDate(weekStart.getDate() + 1)),
      wednesday: new Date(weekStart.setDate(weekStart.getDate() + 1)),
      thursday: new Date(weekStart.setDate(weekStart.getDate() + 1)),
      friday: new Date(weekStart.setDate(weekStart.getDate() + 1)),
      saturday: new Date(weekStart.setDate(weekStart.getDate() + 1)),
      sunday: new Date(weekStart.setDate(weekStart.getDate() + 1)),
    });
  }
  return output;
};

// generate array of weeks from prev, current and next years
const weeksPrevCurNextYear = (year) => {
  return [
    ...weeksInYear(year - 1),
    ...weeksInYear(year),
    ...weeksInYear(year + 1),
  ];
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
  const weeksArray = weeksPrevCurNextYear(activeYear);

  // find current week index in weeksArray
  const currentWeek = weeksArray.findIndex(
    (el) =>
      Object.values(el).findIndex((e) => e.getTime() === today.getTime()) !== -1
  );

  const [activeWeek, setActiveWeek] = useState(currentWeek);

  return (
    <WeeksContext.Provider value={weeksArray}>
      <SelectedWeekContext.Provider value={{ activeWeek, setActiveWeek }}>
        {children}
      </SelectedWeekContext.Provider>
    </WeeksContext.Provider>
  );
};
