import React from 'react';
import classes from './Landscaping.module.scss';

const Landscaping = () => {
  const cardData = [
    {
      title: 'planning',
      image: 'landscape_plan',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam vitae commodo nisi. Nulla vitae nibh ac urna lobortis malesuada sit amet et erat. `,
    },
    {
      title: 'preparation',
      image: 'landscape_prep',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam vitae commodo nisi. Nulla vitae nibh ac urna lobortis malesuada sit amet et erat. `,
    },
    {
      title: 'construction',
      image: 'landscape_prep2',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam vitae commodo nisi. Nulla vitae nibh ac urna lobortis malesuada sit amet et erat. `,
    },
  ];

  const cardJsx = cardData.map((el) => {
    return (
      <li key={el.title} className={`${classes.stage} col s12 m12 l4`}>
        <h4>{el.title}</h4>
        <img
          src={require(`../../../assets/images/${el.image}.jpg`)}
          alt={el.title}
        />
        <p>{el.description}</p>
      </li>
    );
  });

  return (
    <section className={classes.landscaping} id='landscaping'>
      <div className='container'>
        <div className='row'>
          <div className={`${classes.intro} col s12 m10 offset-m1`}>
            <h2>Landscaping</h2>
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
        <div className={classes.stages}>
          <ul className='row'>{cardJsx}</ul>
        </div>
        <div className='row'>
          <div
            className={`${classes.intro} ${classes.complete} col s12 m10 offset-m1`}
          >
            <h3>Project Outcome</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              arcu justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam
              vitae commodo nisi. Nulla vitae nibh ac urna lobortis malesuada
              sit amet et erat.
            </p>
            <img
              src={require('../../../assets/images/landscape_complete1000x750.jpg')}
              alt='A completed patio project'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landscaping;
