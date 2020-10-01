import React from 'react';
import Nav from '../Components/Nav/Nav';
import Background from '../Components/Home/Background/Background';
import { WeeksProvider } from '../Context/WeeksContext';
import VisibleWeeks from '../Components/Home/VisibleWeeks/VisibleWeeks';
import DaySelect from '../Components/Home/DaySelect/DaySelect';
import Map from '../Components/Home/Map/Map';
import AllocatedJobs from '../Components/Home/AllocatedJobs/AllocatedJobs';

const Home = () => {
  return (
    <>
      <Nav active='home' />
      <Background>
        <WeeksProvider>
          <VisibleWeeks />
          <DaySelect />
          <div className='container' style={{ display: 'flex' }}>
            <Map />
            <AllocatedJobs />
          </div>
        </WeeksProvider>
      </Background>
    </>
  );
};

export default Home;
