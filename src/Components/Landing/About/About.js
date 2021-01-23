import React from 'react';
import Grass from './Icons/Grass';
import Tree from './Icons/Tree';
import Spade from './Icons/Spade';
import classes from './About.module.scss';

const About = () => {
  return (
    <section className={`${classes.about} container`} id='about'>
      <div className='row'>
        <div className='col s12 m10 offset-m1'>
          <h2>About Us</h2>
          <p className='long-copy'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu
            justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam vitae
            commodo nisi. Nulla vitae nibh ac urna lobortis malesuada sit amet
            et erat. Ut sed lorem ut massa gravida vestibulum. Integer iaculis
            metus bibendum egestas bibendum. Vivamus venenatis, nunc at
            pellentesque tincidunt, quam nisi pellentesque mauris, at volutpat
            justo nisl suscipit purus.
          </p>
        </div>
      </div>
      <div className='row'>
        <div className={`col s12 m10 offset-m1 l4 ${classes.card}`}>
          <Grass />
          <h3>Maintenance</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu
            justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam vitae
            commodo nisi. Nulla vitae nibh ac urna lobortis malesuada sit amet
            et erat. Ut sed lorem ut massa gravida vestibulum. Integer iaculis
            metus bibendum egestas bibendum.
          </p>
        </div>
        <div className={`col s12 m10 offset-m1 l4 ${classes.card}`}>
          <Tree />

          <h3>Tree work</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu
            justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam vitae
            commodo nisi. Nulla vitae nibh ac urna lobortis malesuada sit amet
            et erat. Ut sed lorem ut massa gravida vestibulum. Integer iaculis
            metus bibendum egestas bibendum.
          </p>
        </div>
        <div className={`col s12 m10 offset-m1 l4 ${classes.card}`}>
          <Spade />

          <h3>Landscaping</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu
            justo, facilisis nec odio eu, blandit rhoncus lorem. Nullam vitae
            commodo nisi. Nulla vitae nibh ac urna lobortis malesuada sit amet
            et erat. Ut sed lorem ut massa gravida vestibulum. Integer iaculis
            metus bibendum egestas bibendum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
