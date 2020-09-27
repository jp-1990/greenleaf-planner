import React from 'react';
import classes from './Landscaping.module.scss';

const Landscaping = () => {
  const cardData = [
    {
      title: 'planning',
      image: 'landscape_plan',
      description: `Our ethos revolves around providing a bespoke service for each
    customer, maintaining a focus on your individual needs allowing
    you to relax and leave the work to us with full confidence.`,
    },
    {
      title: 'preparation',
      image: 'landscape_prep',
      description: `Our ethos revolves around providing a bespoke service for each
    customer, maintaining a focus on your individual needs allowing
    you to relax and leave the work to us with full confidence.`,
    },
    {
      title: 'construction',
      image: 'landscape_prep2',
      description: `Our ethos revolves around providing a bespoke service for each
    customer, maintaining a focus on your individual needs allowing
    you to relax and leave the work to us with full confidence.`,
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
        <div className={classes.stages}>
          <ul className='row'>{cardJsx}</ul>
        </div>
        <div className='row'>
          <div
            className={`${classes.intro} ${classes.complete} col s12 m10 offset-m1`}
          >
            <h3>Project Outcome</h3>
            <p>
              Our ethos revolves around providing a bespoke service for each
              customer, maintaining a focus on your individual needs allowing
              you to relax and leave the work to us with full confidence.
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
