import React, { useState } from 'react';
import classes from './CreateJob.module.scss';
import M from 'materialize-css';
import { useCustomers } from '../../../Context/CustomersContext';
import { useJobs } from '../../../Context/JobsContext';

const CreateJob = ({ setModalState }) => {
  const [notes, setNotes] = useState('');
  const [info, setInfo] = useState({
    nextVisit: '',
    time: '',
  });
  const [search, setSearch] = useState('');
  const { customerList } = useCustomers();
  const { jobsDatabaseRef, setUpdateTrigger } = useJobs();

  const database = jobsDatabaseRef(new Date(Date.now()).getFullYear());

  // info input handler
  const handleInfoInput = (event, target) => {
    const value = event.target.value;
    setInfo((prev) => {
      return { ...prev, [target]: value };
    });
  };

  // create new job handler
  const createNewJob = () => {
    // check customer exists
    if (
      customerList.findIndex(
        (el) => el.name.toLowerCase() === search.toLowerCase()
      ) === -1
    ) {
      M.toast({ html: `Customer name ${search} not found` });
      return;
    }
    // selected customer
    const selectedCustomer = customerList.find(
      (el) => el.name.toLowerCase() === search.toLowerCase()
    );

    // date default
    const defaultDate = () => {
      const output = new Date(Date.now());
      if (output.getDay() === 0) {
        return new Date(output.setDate(output.getDate() + 1));
      }
      return output;
    };

    // build new job object
    const newJobObject = {
      address: [
        selectedCustomer.addressLine1,
        selectedCustomer.addressLine2,
        selectedCustomer.town,
        selectedCustomer.county,
        selectedCustomer.postcode,
      ],
      assigned: -1,
      complete: false,
      id: null,
      location: selectedCustomer.town,
      name: selectedCustomer.name,
      nextVisit: info.nextVisit || defaultDate().toLocaleDateString(),
      notes: notes,
      numbers: [selectedCustomer.home, selectedCustomer.mobile],
      prevVisit: '',
      rebook: selectedCustomer.frequency,
      rebooked: false,
      time: info.time * 1 || 30,
    };

    const newJobRef = database.push();
    newJobRef.set({ ...newJobObject, id: newJobRef.key });

    setUpdateTrigger((prev) => !prev);
    setModalState(false);
    M.toast({ html: `Created new job for ${selectedCustomer.name}` });
  };

  // jsx for customer search
  const customerSearchJsx = (
    <div className={classes.infoBox} style={{ backgroundColor: 'white' }}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Customer search</h6>
      </div>
      <div className={classes.edit}>
        <input
          placeholder='Search for a customer...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
    </div>
  );

  // generate array of customers
  let counter = 0;
  const customerArray = customerList.map((el, i) => {
    if (el.name.toLowerCase().includes(search) || !search) {
      counter++;
      return (
        <div
          key={el + i}
          onClick={() => setSearch(el.name)}
          style={{ cursor: 'pointer' }}
        >
          {el.name}
        </div>
      );
    } else {
      return null;
    }
  });

  // jsx for search results
  const searchResultsJsx = (
    <div
      className={classes.infoBox}
      style={{ backgroundColor: 'white', paddingTop: '0' }}
    >
      <p>{`Customers (${counter})`}</p>
      <div className={classes.content}>{customerArray}</div>
    </div>
  );

  // jsx for job info
  const infoJsx = (
    <div className={classes.infoBox} style={{ backgroundColor: 'white' }}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Job info</h6>
      </div>
      <div className={classes.edit}>
        <input
          placeholder='Visit date... (e.g. 01/01/2020)'
          value={info.nextVisit}
          onChange={(e) => handleInfoInput(e, 'nextVisit')}
        ></input>
        <input
          placeholder='Estimated duration in minutes... (e.g. 120)'
          value={info.time}
          onChange={(e) => handleInfoInput(e, 'time')}
        ></input>
      </div>
    </div>
  );

  // jsx for job notes
  const notesJsx = (
    <div className={classes.infoBox} style={{ backgroundColor: 'white' }}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Notes</h6>
      </div>
      <div className={classes.edit}>
        <textarea
          value={notes.contractDetails}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
    </div>
  );

  return (
    <div className={classes.container}>
      <h4>Create New Job</h4>
      <div className={classes.details}>
        <div className={classes.customerSearch}>
          {customerSearchJsx}
          {searchResultsJsx}
        </div>
        <div className={classes.notes}>
          {infoJsx}
          {notesJsx}
        </div>
      </div>
      <div className={classes.createOptions}>
        <span onClick={createNewJob} className={classes.create}>
          Create New Job
        </span>
        <span
          onClick={() => setModalState((prev) => !prev)}
          className={classes.cancelCreate}
        >
          Cancel
        </span>
      </div>
    </div>
  );
};

export default CreateJob;
