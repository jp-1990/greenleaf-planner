import React from 'react';
import classes from './Tree.module.scss';

const Tree = () => {
  const cardData = [
    {
      image: 'pruning',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu justo, facilisis nec odio eu, blandit rhoncus lorem. `,
    },
    {
      image: 'felling',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu justo, facilisis nec odio eu, blandit rhoncus lorem. `,
    },
    {
      image: 'wind_damage',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu justo, facilisis nec odio eu, blandit rhoncus lorem. `,
    },
  ];

  const cardJsx = cardData.map((el) => {
    return (
      <li key={el.image} className={classes.example}>
        <img
          src={require(`../../../assets/images/${el.image}.jpg`).default}
          alt={el.image}
          height='180px'
          width='180px'
        />
        <p>{el.description}</p>
      </li>
    );
  });

  return (
    <section className={classes.treework} id='tree'>
      <div className='container'>
        <div className='row'>
          <div className={`${classes.intro} col s12 m10 offset-m1`}>
            <h2>Tree Work</h2>
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
        <div className={classes.examples}>
          <ul>{cardJsx}</ul>
        </div>
      </div>
    </section>
  );
};

export default Tree;
