import React from 'react';

import WeekCarousel from '../Components/Planner/WeekSelector/WeekCarousel';
import SelectedWeek from '../Components/Planner/SelectedWeek/SelectedWeek';

import { WeeksProvider } from '../Context/WeeksContext';
import { JobsProvider } from '../Context/JobsContext';

const Planner = () => {
  return (
    <>
      <WeeksProvider>
        <WeekCarousel />
        <JobsProvider>
          <SelectedWeek />
        </JobsProvider>
      </WeeksProvider>
    </>
  );
};

export default Planner;
