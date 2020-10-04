import React, { useContext, useState } from 'react';
import { dateFromString } from '../GlobalFunctions/dateOperations';

// ==========================================================================
// test data
// ==========================================================================

const testVisit = () => {
  return dateFromString(
    `${Math.floor(Math.random() * 6) + 28}/9/2020`
  ).toLocaleDateString();
};

const customerNames = [
  'churchfield green',
  'spicer',
  'mercer',
  'kendrick',
  'richmond',
  'patient',
  'regal',
  'sutherland court',
  'dormy house',
  'gray',
];

const jobLocations = [
  'mundesley',
  'overstand',
  'norwich',
  'cromer',
  'north walsham',
  'holt',
  'sheringham',
  'worstead',
  'aylsham',
];

const testData = [];
const generateCutomers = (day) => {
  for (let i = 0; i < Math.floor(Math.random() * 61 + 10); i++) {
    testData.push({
      name: customerNames[Math.floor(Math.random() * 9)],
      id: `${i}${day}`,
      location: jobLocations[Math.floor(Math.random() * 8)],
      rebook: Math.floor(Math.random() * 14) + 7,
      prevVisit: '01/09/2020',
      nextVisit: testVisit(),
      assigned: Math.floor(Math.random() * 5),
      time: Math.floor(Math.random() * 170) + 10,
      notes: null,
      address: '405 Somestreet, Norwich, Norfolk',
    });
  }
};

const testDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

testDays.forEach((el) => {
  generateCutomers(el);
});

// ==========================================================================

const JobsContext = React.createContext();

export const useJobs = () => {
  return useContext(JobsContext);
};

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState(testData);

  return (
    <JobsContext.Provider value={[jobs, setJobs]}>
      {children}
    </JobsContext.Provider>
  );
};
