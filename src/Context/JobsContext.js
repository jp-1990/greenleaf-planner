import React, { useContext, useState } from 'react';

const JobsContext = React.createContext();
const AssignJobsContext = React.createContext();

export const useJobs = () => {
  return useContext(JobsContext);
};

export const useAssignJobs = () => {
  return useContext(AssignJobsContext);
};

export const JobsProvider = ({ children }) => {
  const [assignedJobs, setAssignedJobs] = useState({
    monday: [[], [], [], [], []],
    tuesday: [[], [], [], [], []],
    wednesday: [[], [], [], [], []],
    thursday: [[], [], [], [], []],
    friday: [[], [], [], [], []],
    saturday: [[], [], [], [], []],
  });
  const [jobs, setJobs] = useState();

  return (
    <JobsContext.Provider value={[jobs, setJobs]}>
      <AssignJobsContext.Provider value={[assignedJobs, setAssignedJobs]}>
        {children}
      </AssignJobsContext.Provider>
    </JobsContext.Provider>
  );
};
