import React from 'react';
import Nav from '../Components/Nav/Nav';
import WeekCarousel from '../Components/Planner/WeekSelector/WeekCarousel';
import SelectedWeek from '../Components/Planner/SelectedWeek/SelectedWeek';

import { WeeksProvider } from '../Context/WeeksContext';
import { JobsProvider } from '../Context/JobsContext';
import { StaffProvider } from '../Context/StaffContext';

const Planner = () => {
  return (
    <>
      <Nav active='planner' />
      <WeeksProvider>
        <WeekCarousel />
        <JobsProvider>
          <StaffProvider>
            <SelectedWeek />
          </StaffProvider>
        </JobsProvider>
      </WeeksProvider>
    </>
  );
};

export default Planner;
