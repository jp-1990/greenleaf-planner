import React, { useContext, useState } from 'react';

const JobsContext = React.createContext();

export const useJobs = () => {
  return useContext(JobsContext);
};

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  return (
    <JobsContext.Provider value={[jobs, setJobs]}>
      {children}
    </JobsContext.Provider>
  );
};
