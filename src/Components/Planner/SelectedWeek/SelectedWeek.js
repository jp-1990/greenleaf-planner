import React, { useState } from 'react';
import DaysNav from './DaysNav/DaysNav';
import DaysCarousel from './DaysCarousel/DaysCarousel';
import AssignedJobs from './AssignedJobs/AssignedJobs';
import { useWeeks, useSelectedWeek } from '../../../Context/WeeksContext';

const SelectedWeek = () => {
  const [day, setDay] = useState(0);
  const weeksArray = useWeeks();
  const { activeWeek } = useSelectedWeek();

  return (
    <>
      <div className='container' style={{ marginTop: '20px' }}>
        <DaysNav day={day} setDay={setDay} />
        <DaysCarousel setDay={setDay} />
      </div>
      <AssignedJobs day={day} week={weeksArray[activeWeek]} />
    </>
  );
};

export default SelectedWeek;
