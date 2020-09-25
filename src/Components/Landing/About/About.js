import React from 'react';
import Grass from './Icons/Grass';
import Tree from './Icons/Tree';
import Spade from './Icons/Spade';
import classes from './About.module.scss';

const About = () => {
  return (
    <section className={`${classes.about} row container`} id='about'>
      <div className='row'>
        <div className='col s8 offset-s2'>
          <h2>About Us</h2>
          <p className='long-copy'>
            Established in 2002, Lowthers Gardening Services has been steadily
            growing in size. Originally a one-man operation, we now boast a team
            of seven capable gardeners dedicated to fulfilling our customers'
            needs. Our ethos revolves around providing a bespoke service for
            each customer, maintaining a focus on your individual needs allowing
            you to relax and leave the work to us with full confidence.
          </p>
        </div>
      </div>
      <div className='row'>
        <div className={`col s4 ${classes.card}`}>
          <Grass />
          <h3>Maintenance</h3>
          <p>
            We provide options for general garden maintenance, from grass
            cutting all the way up to full garden management. This can include
            weeding, hedge cutting, pruning, general planting, and anything else
            involved with keeping your garden the envy of the neighbourhood.
          </p>
        </div>
        <div className={`col s4 ${classes.card}`}>
          <Tree />

          <h3>Tree work</h3>
          <p>
            We are insured and qualified to tackle small tree work in a safe and
            professional manner. We also have a relationship with a local tree
            surgery business with which we can introduce you, in the event that
            your job is beyond our level of insurance and qualification.
          </p>
        </div>
        <div className={`col s4 ${classes.card}`}>
          <Spade />

          <h3>Landscaping</h3>
          <p>
            We have a dedicated landscaping team who will be happy to work with
            you to make your vision a reality. The process starts with
            discussions, measurements, and where applicable, a computer
            generated design. Once the plan has been finalised, work will begin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
