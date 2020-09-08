import React from 'react';
import Nav from '../Components/Nav/Nav';
import WeekCarousel from '../Components/Planner/WeekSelector/WeekCarousel';
import SelectedWeek from '../Components/Planner/SelectedWeek/SelectedWeek';
import AssignedJobs from '../Components/Planner/AssignedJobs/AssignedJobs';
import Footer from '../Components/Footer/Footer';
import { WeeksProvider } from '../Context/WeeksContext';

const Layout = () => {
  return (
    <>
      <Nav />
      <WeeksProvider>
        <WeekCarousel />
        <SelectedWeek />
        <AssignedJobs
          jobs={null}
          colors={{
            Nick: '#f44336',
            Zack: '#ffc107',
            Neil: '#00bcd4',
            James: '#0d47a1',
            Alan: '#00c853',
          }}
        />
      </WeeksProvider>
      <Footer />
    </>
  );
};

export default Layout;
