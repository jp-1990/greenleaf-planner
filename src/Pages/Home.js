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

const Home = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedDay, setSelectedDay] = useState(currentDate().day - 1);
  const [displayDetails, setDisplayDetails] = useState();
  const [mapSettings, setMapSettings] = useState({
    lng: 1.296901,
    lat: 52.630331,
    zoom: 10,
  });
  const { currentUser } = useAuth();
  const colors = {
    Nick: '#f44336',
    Zack: '#ffc107',
    Neil: '#00bcd4',
    James: '#0d47a1',
    Alan: '#00c853',
  };

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
            <DaySelect
              color={colors[currentUser.displayName]}
              activeDay={selectedDay}
              setActiveDay={setSelectedDay}
            />
            <div className='container' style={{ display: 'flex' }}>
              <Map
                color={colors[currentUser.displayName]}
                settings={mapSettings}
                setSettings={setMapSettings}
              />
              <AllocatedJobs
                color={colors[currentUser.displayName]}
                details={displayDetails}
                setDetails={setDisplayDetails}
                day={selectedDay}
                week={selectedWeek}
                employee={{
                  number: Object.keys(colors).findIndex(
                    (el) => el === currentUser.displayName
                  ),
                  name: currentUser.displayName,
                }}
              />
            </div>
          </WeeksProvider>
        </JobsProvider>
      </Background>
    </>
  );
};

export default Home;
