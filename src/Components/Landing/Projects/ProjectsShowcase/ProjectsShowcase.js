import React from 'react';
import classes from './ProjectsShowcase.module.scss';

const ProjectsShowcase = () => {
  const images = [
    'chapman',
    'sharples',
    'catlow',
    'clough',
    'rackham',
    'paul',
    'unknown',
    'eldred',
  ];

  const imagesJsx = images.map((el) => {
    return (
      <li>
        <figure className={classes.photo}>
          <img
            src={
              require(`../../../../assets/images/${el}_thumb500px.jpg`).default
            }
            alt={el}
          />
        </figure>
      </li>
    );
  });

  return (
    <section className={classes.projects} id='projectsshowcase'>
      <ul className={classes.showcase}>
        {imagesJsx[0]}
        {imagesJsx[1]}
        {imagesJsx[2]}
        {imagesJsx[3]}
      </ul>
      <ul className={classes.showcase}>
        {imagesJsx[4]}
        {imagesJsx[5]}
        {imagesJsx[6]}
        {imagesJsx[7]}
      </ul>
    </section>
  );
};

export default ProjectsShowcase;
