import React, { useState } from 'react';
import classes from './AssignedJob.module.scss';
import { capitaliseFirstLetters } from '../../../../../../GlobalFunctions/stringOperations';
import { useJobs } from '../../../../../../Context/JobsContext';

const AssignedJob = ({ id, title, time, location, notes }) => {
  const [noteValue, setNoteValue] = useState('');
  const [noteVisible, setNoteVisible] = useState(notes);
  const setJobs = useJobs()[1];

  const deleteHandler = () => {
    setJobs((prev) => {
      const newState = [...prev];
      newState[newState.findIndex((el) => el['id'] === id)]['assigned'] = -1;
      newState[newState.findIndex((el) => el['id'] === id)]['notes'] = null;
      return newState;
    });
  };

  const displayNotesHandler = () => {
    setNoteVisible((prev) => !prev);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setJobs((prev) => {
      const newState = [...prev];
      newState[newState.findIndex((el) => el['id'] === id)][
        'notes'
      ] = noteValue;
      return newState;
    });
    displayNotesHandler();
  };

  const changeHandler = (event) => {
    setNoteValue(event.target.value);
  };

  return (
    <div className={classes.job}>
      <h6 className='truncate' onClick={displayNotesHandler}>
        {capitaliseFirstLetters(title)}
      </h6>
      <div className={classes.time}>
        <i className='material-icons'>query_builder</i>
        <p>{time}</p>
      </div>
      <i onClick={deleteHandler} className='material-icons'>
        clear
      </i>
      <div className={`${classes.notes} ${noteVisible ? null : classes.none}`}>
        <h6>Notes</h6>
        <form onSubmit={submitHandler}>
          <label>
            <textarea
              value={noteValue}
              onChange={(event) => changeHandler(event)}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
};

export default AssignedJob;
