import React, { useState } from 'react';
import Nav from '../Components/Nav/Nav';
import WeekCarousel from '../Components/Planner/WeekSelector/WeekCarousel';
import SelectedWeek from '../Components/Planner/SelectedWeek/SelectedWeek';
import Modal from '../Components/Modal/Modal';
import AddJob from '../Components/Planner/AddJob/AddJob';
import CreateJob from '../Components/Planner/CreateJob/CreateJob';

import { WeeksProvider } from '../Context/WeeksContext';
import { JobsProvider } from '../Context/JobsContext';
import { StaffProvider } from '../Context/StaffContext';
import { CustomersProvider } from '../Context/CustomersContext';
import { ScreenWidthProvider } from '../Context/ScreenWidthContext';

const Planner = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Nav active='planner' />
      <WeeksProvider>
        <ScreenWidthProvider>
          <WeekCarousel />
          <AddJob setModalState={setModalState} />
          <JobsProvider>
            <CustomersProvider>
              <Modal state={modalState} setState={setModalState}>
                {modalState === 'createjob' ? (
                  <CreateJob setModalState={setModalState} />
                ) : null}
              </Modal>
            </CustomersProvider>
            <StaffProvider>
              <SelectedWeek />
            </StaffProvider>
          </JobsProvider>
        </ScreenWidthProvider>
      </WeeksProvider>
    </>
  );
};

export default Planner;
