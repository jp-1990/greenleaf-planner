import React from 'react';
import classes from './Gardening.module.scss';

const Gardening = () => {
  const cardData = [
    {
      title: 'grass cutting',
      description: `Established in 2002, Lowthers Gardening Services has been
    steadily growing in size. Originally a one-man operation, we now
    boast a team of seven capable gardeners dedicated to fulfilling
    our customers' needs.`,
      img: 'grass_cutting',
    },
    {
      title: 'strimming',
      description: `Established in 2002, Lowthers Gardening Services has been
    steadily growing in size. Originally a one-man operation, we now
    boast a team of seven capable gardeners dedicated to fulfilling
    our customers' needs.`,
      img: 'strimming',
    },
    {
      title: 'weeding',
      description: `Established in 2002, Lowthers Gardening Services has been
    steadily growing in size. Originally a one-man operation, we now
    boast a team of seven capable gardeners dedicated to fulfilling
    our customers' needs.`,
      img: 'weeding',
    },
    {
      title: 'hedge cutting',
      description: `Established in 2002, Lowthers Gardening Services has been
      steadily growing in size. Originally a one-man operation, we now
      boast a team of seven capable gardeners dedicated to fulfilling
      our customers' needs.`,
      img: 'hedge_cutting',
    },
  ];

  const cardJsx = cardData.map((el) => {
    return (
      <li key={el.title} className={`${classes.card}`}>
        <h3>{el.title}</h3>
        <img
          src={require(`../../../assets/images/${el.img}.jpg`)}
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
          <div className={`${classes.intro} col s10 offset-s1`}>
            <h2>Garden Maintenance</h2>
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
      <div className={`${classes.cardbox}`}>
        <ul>{cardJsx}</ul>
      </div>
    </section>
  );
};

export default Gardening;
