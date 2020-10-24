import React, { useState } from 'react';
import M from 'materialize-css';
import classes from './AssignedJob.module.scss';
import { capitaliseFirstLetters } from '../../../../../GlobalFunctions/stringOperations';
import { useJobs } from '../../../../../Context/JobsContext';

const AssignedJob = ({ id, name, time, notes, noteHandlers, nextVisit }) => {
  const [noteValue, setNoteValue] = useState(notes);
  const [timeValue, setTimeValue] = useState(time);
  const { displayNote, setDisplayNote } = noteHandlers;
  const { jobsDatabaseRef } = useJobs();

  const database = jobsDatabaseRef(
    new Date(
      nextVisit.split('/')[2],
      nextVisit.split('/')[1] - 1,
      nextVisit.split('/')[0]
    ).getFullYear()
  );

  // make sure only one note can be displayed at a time
  const displayNotesHandler = () => {
    setDisplayNote((prev) => {
      if (prev && prev === id) {
        return false;
      }
      return id;
    });
  };

  const deleteHandler = () => {
    database.child(id).update({ assigned: -1 });
    setTimeout(() => {
      M.toast({
        html: `Unassigned ${capitaliseFirstLetters(name)}`,
        displayLength: 2000,
      });
    }, 100);
  };

  // update notes and time est for assigned job
  const submitHandler = (event) => {
    event.preventDefault();
    database.child(id).update({ notes: noteValue, time: timeValue * 1 });
    displayNotesHandler();

    setTimeout(() => {
      M.toast({
        html: `Updated notes and time est. (${capitaliseFirstLetters(name)})`,
        displayLength: 2000,
      });
    }, 100);
  };

  return (
    <div className={classes.job}>
      <h6 className='truncate' onClick={displayNotesHandler}>
        {capitaliseFirstLetters(name)}
      </h6>
      <div className={classes.time}>
        <i className='material-icons'>query_builder</i>
        <p>{timeValue}</p>
      </div>
      <i onClick={deleteHandler} className='material-icons'>
        clear
      </i>
      <div
        className={`${classes.notes} ${
          displayNote === id ? null : classes.none
        }`}
      >
        <h6>Notes</h6>
        <div className={classes.time}>
          <i className='material-icons'>query_builder</i>
          <input
            value={timeValue}
            onChange={(e) => setTimeValue(e.target.value)}
          ></input>
        </div>
        <form onSubmit={submitHandler}>
          <label>
            <textarea
              value={noteValue}
              onChange={(e) => setNoteValue(e.target.value)}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
};

export default AssignedJob;
