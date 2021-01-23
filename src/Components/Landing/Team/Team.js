import React from 'react';
import classes from './Team.module.scss';

const Team = () => {
  const staffHeadshots = [
    'james',
    'mimi',
    'ryan',
    'mason',
    'nick',
    'dan',
    'will',
  ];

  const headshotsJsx = staffHeadshots.map((el) => {
    return (
      <li key={el}>
        <figure className={classes.team__headshots}>
          <img
            src={require(`../../../assets/images/${el}_thumb.jpg`)}
            alt={`Headshot of ${el}`}
            height='150px'
            width='150px'
          />
        </figure>
        <h4>{el}</h4>
      </li>
    );
  });

  return (
    <section className={classes.team} id='team'>
      <div className={`container ${classes.intro}`}>
        <div className='row'>
          <h2>The Team</h2>
          <div className='col s12 m10 offset-m1'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              arcu justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam
              vitae commodo nisi. Nulla vitae nibh ac urna lobortis malesuada
              sit amet et erat. Ut sed lorem ut massa gravida vestibulum.
              Integer iaculis metus bibendum egestas bibendum. Vivamus
              venenatis, nunc at pellentesque tincidunt, quam nisi pellentesque
              mauris, at volutpat justo nisl suscipit purus.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.team__images}>
        <ul>{headshotsJsx}</ul>
      </div>
    </section>
  );
};

export default Team;
