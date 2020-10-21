import React, { useContext, useState, useEffect } from 'react';
import { database } from '../firebase';

const JobsContext = React.createContext();
export const useJobs = () => {
  return useContext(JobsContext);
};

// database ref
const jobsDatabase = database.ref('jobs/2020');

export const JobsProvider = ({ children }) => {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    const output = [];
    const getJobsList = async () => {
      await jobsDatabase.once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          output.push({ ...childSnapshot.val() });
        });
      });
      setJobList(output);
      setLoading(false);
    };
    getJobsList();
  }, [updateTrigger]);

  jobsDatabase.on('child_changed', (data) => {
    setJobList((prev) => {
      const newData = [...prev];
      const index = newData.findIndex((el) => el.id === data.val().id);
      newData[index] = data.val();
      return newData;
    });
  });

  const value = {
    jobList,
    setJobList,
    setUpdateTrigger,
    loading,
  };

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
  };

  const loadingJsx = (
    <div style={loadingStyle}>
      <div className='preloader-wrapper big active'>
        <div className='spinner-layer spinner-green-only'>
          <div className='circle-clipper left'>
            <div className='circle'></div>
          </div>
          <div className='gap-patch'>
            <div className='circle'></div>
          </div>
          <div className='circle-clipper right'>
            <div className='circle'></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <JobsContext.Provider value={value}>
      {jobList.length === 0 ? loadingJsx : children}
    </JobsContext.Provider>
  );
};
