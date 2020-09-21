import React from 'react';
import Nav from '../Components/Nav/Nav';
import WeekCarousel from '../Components/Planner/WeekSelector/WeekCarousel';
import SelectedWeek from '../Components/Planner/SelectedWeek/SelectedWeek';
import Footer from '../Components/Footer/Footer';
import { WeeksProvider } from '../Context/WeeksContext';
import { JobsProvider } from '../Context/JobsContext';

const Planner = () => {
  return (
    <>
      <Nav />
      <WeeksProvider>
        <WeekCarousel />
        <JobsProvider>
          <SelectedWeek />
        </JobsProvider>
      </WeeksProvider>
      <Footer />
    </>
  );
};

export default Planner;
