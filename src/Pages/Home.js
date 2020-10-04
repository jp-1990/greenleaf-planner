import React, { useState } from 'react';
import Nav from '../Components/Nav/Nav';
import Background from '../Components/Home/Background/Background';
import { WeeksProvider } from '../Context/WeeksContext';
import { JobsProvider } from '../Context/JobsContext';
import VisibleWeeks from '../Components/Home/VisibleWeeks/VisibleWeeks';
import DaySelect from '../Components/Home/DaySelect/DaySelect';
import Map from '../Components/Home/Map/Map';
import AllocatedJobs from '../Components/Home/AllocatedJobs/AllocatedJobs';
import { currentDate } from '../GlobalFunctions/dateOperations';

const Home = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedDay, setSelectedDay] = useState(currentDate().day - 1);
  const [displayDetails, setDisplayDetails] = useState();

  // const colors = {
  //   Nick: '#f44336',
  //   Zack: '#ffc107',
  //   Neil: '#00bcd4',
  //   James: '#0d47a1',
  //   Alan: '#00c853',
  // };

  return (
    <>
      <Nav active='home' />
      <Background>
        <JobsProvider>
          <WeeksProvider>
            <VisibleWeeks
              activeWeek={selectedWeek}
              setActiveWeek={setSelectedWeek}
            />
            <DaySelect activeDay={selectedDay} setActiveDay={setSelectedDay} />
            <div className='container' style={{ display: 'flex' }}>
              <Map />
              <AllocatedJobs
                details={displayDetails}
                setDetails={setDisplayDetails}
                day={selectedDay}
                week={selectedWeek}
                employee={0}
              />
            </div>
          </WeeksProvider>
        </JobsProvider>
      </Background>
    </>
  );
};

export default Home;
