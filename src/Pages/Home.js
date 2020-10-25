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
import { useAuth } from '../Context/AuthContext';
import { StaffProvider } from '../Context/StaffContext';

const Home = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedDay, setSelectedDay] = useState(currentDate().day - 1);
  const { currentUser } = useAuth();

  return (
    <>
      <Nav active='home' />
      <Background>
        <JobsProvider>
          <WeeksProvider>
            <StaffProvider>
              <VisibleWeeks
                activeWeek={selectedWeek}
                setActiveWeek={setSelectedWeek}
              />
              <DaySelect
                user={currentUser.displayName}
                activeDay={selectedDay}
                setActiveDay={setSelectedDay}
              />
              <div className='container' style={{ display: 'flex' }}>
                <Map
                  user={currentUser.displayName}
                  day={selectedDay}
                  week={selectedWeek}
                />
                <AllocatedJobs
                  user={currentUser.displayName}
                  day={selectedDay}
                  week={selectedWeek}
                />
              </div>
            </StaffProvider>
          </WeeksProvider>
        </JobsProvider>
      </Background>
    </>
  );
};

export default Home;
