import React from 'react';
import Nav from '../Nav/Nav';
import WeekCarousel from '../Planner/WeekSelector/WeekCarousel';
import SelectedWeek from '../Planner/SelectedWeek/SelectedWeek';
import AssignedJobs from '../Planner/AssignedJobs/AssignedJobs';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
      <Nav />
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
      <Footer />
    </>
  );
};

export default Layout;
