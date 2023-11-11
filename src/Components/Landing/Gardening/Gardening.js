import React from 'react';
import classes from './Gardening.module.scss';

const Gardening = () => {
  const cardData = [
    {
      title: 'grass cutting',
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam vitae commodo nisi. Nulla vitae nibh ac urna lobortis malesuada sit amet et erat.`,
      img: 'grass_cutting',
    },
    {
      title: 'strimming',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam vitae commodo nisi. Nulla vitae nibh ac urna lobortis malesuada sit amet et erat.`,
      img: 'strimming',
    },
    {
      title: 'weeding',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam vitae commodo nisi. Nulla vitae nibh ac urna lobortis malesuada sit amet et erat.`,
      img: 'weeding',
    },
    {
      title: 'hedge cutting',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam vitae commodo nisi. Nulla vitae nibh ac urna lobortis malesuada sit amet et erat.`,
      img: 'hedge_cutting',
    },
  ];

  const cardJsx = cardData.map((el) => {
    return (
      <li key={el.title} className={`${classes.card}`}>
        <h3>{el.title}</h3>
        <img
          src={require(`../../../assets/images/${el.img}.jpg`).default}
          alt={el.title}
          height='300px'
          width='300px'
        />
        <p>{el.description}</p>
      </li>
    );
  });

  return (
    <section className={`${classes.gardening}`} id='gardening'>
      <div className='container'>
        <div className='row'>
          <div className={`${classes.intro} col s12 m10 offset-m1`}>
            <h2>Garden Maintenance</h2>
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
      <div className={`${classes.cardbox}`}>
        <ul>{cardJsx}</ul>
      </div>
    </section>
  );
};

export default Gardening;
