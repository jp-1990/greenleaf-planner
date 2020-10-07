import React from 'react';
import classes from './Search.module.scss';

const Search = () => {
  return (
    <div className={classes.search}>
      <i className='material-icons'>search</i>
      <input placeholder='Search...'></input>
    </div>
  );
};

export default Search;
