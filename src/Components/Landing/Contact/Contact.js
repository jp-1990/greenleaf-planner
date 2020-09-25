import React from 'react';
import classes from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={classes.contact} id='contact'>
      <div className='container'>
        <div className='row'>
          <div className={`${classes.intro} col s10 offset-s1`}>
            <h2>Contact</h2>
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
          <div className={`col s4 offset-s4 ${classes.details}`}>
            <h4>Speak to Alan</h4>
            <ul>
              <li>01692 402816</li>
              <li>07799 311550</li>
              <li style={{ color: '#f4f4f4' }}>{`.`}</li>
              <li>lowthersgardeningservices@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
