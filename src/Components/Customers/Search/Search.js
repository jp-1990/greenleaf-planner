import React from 'react';
import classes from './Search.module.scss';

const Search = ({setSearch}) => {
  
  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }

  return (
    <div className={classes.search}>
      <i className='material-icons'>search</i>
    <input placeholder='Search...' onChange={handleSearch}></input>
    </div>
  );
};

export default Search;
