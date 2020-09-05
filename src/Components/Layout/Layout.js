import React from 'react';
import Nav from '../Nav/Nav';
import WeekCarousel from '../Planner/Week/WeekCarousel';
import SelectedWeek from '../Planner/SelectedWeek/SelectedWeek';
import AssignedJobs from '../Planner/AssignedJobs/AssignedJobs';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
      <Nav />
      <WeekCarousel />
      <SelectedWeek />
      <AssignedJobs jobs={null} />
      <Footer />
    </>
  );
};

export default Layout;
