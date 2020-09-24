import React from 'react';
import classes from './Tree.module.scss';

const Tree = () => {
  const cardData = [
    {
      image: 'pruning',
      description: `Originally a one-man operation, we now boast a team of seven
    capable gardeners dedicated to fulfilling our customers' needs.`,
    },
    {
      image: 'felling',
      description: `Originally a one-man operation, we now boast a team of seven
    capable gardeners dedicated to fulfilling our customers' needs.`,
    },
    {
      image: 'wind_damage',
      description: `Originally a one-man operation, we now boast a team of seven
    capable gardeners dedicated to fulfilling our customers' needs.`,
    },
  ];

  const cardJsx = cardData.map((el) => {
    return (
      <li key={el.image} className={classes.example}>
        <img
          src={require(`../../../assets/images/${el.image}.jpg`)}
          alt={el.image}
          height='180px'
          width='180px'
        />
        <p>{el.description}</p>
      </li>
    );
  });

  return (
    <section className={classes.treework}>
      <div className='container'>
        <div className='row'>
          <div className={`${classes.intro} col s10 offset-s1`}>
            <h2>Tree Work</h2>
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
        <div className={classes.examples}>
          <ul>{cardJsx}</ul>
        </div>
      </div>
    </section>
  );
};

export default Tree;
