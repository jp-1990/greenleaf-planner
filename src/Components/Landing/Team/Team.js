import React from 'react';
import classes from './Team.module.scss';

const Team = () => {
  const staffHeadshots = [
    'alan',
    'james',
    'nick',
    'ryan',
    'gareth',
    'zack',
    'neil',
  ];

  const headshotsJsx = staffHeadshots.map((el) => {
    return (
      <li>
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
    <section className={classes.team}>
      <div className={`container ${classes.intro}`}>
        <div className='row'>
          <h2>The Team</h2>
          <div className='col s10 offset-s1'>
            <p>
              Established in 2002, Lowthers Gardening Services has been steadily
              growing in size. Originally a one-man operation, we now boast a
              team of seven capable gardeners dedicated to fulfilling our
              customers' needs. Our ethos revolves around providing a bespoke
              service for each customer, maintaining a focus on your individual
              needs allowing you to relax and leave the work to us with full
              confidence.
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
