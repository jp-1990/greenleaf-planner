import React from 'react';
import classes from './Contact.module.scss';

const Contact = () => {
  const email = ['lowthers', 'garden', 'ing', '@', 'gmail', '.com'];
  return (
    <section className={classes.contact} id='contact'>
      <div className='container'>
        <div className='row'>
          <div className={`${classes.intro} col s12 m10 offset-m1`}>
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
          <div className={`col s12 m8 offset-m2 ${classes.details}`}>
            <h4>Speak to Alan</h4>
            <ul>
              <li>07788 314550</li>
              <li style={{ color: '#f4f4f4' }}>{`.`}</li>
              <li className={classes.email}>
                {email[0]}
                <span style={{ display: 'none' }}>8sk23n4</span>
                {email[1]}
                <span style={{ display: 'none' }}>8sk23n4</span>
                {email[2]}
                <span style={{ display: 'none' }}>8sk23n4</span>
                {email[3]}
                <span style={{ display: 'none' }}>8sk23n4</span>
                {email[4]}
                <span style={{ display: 'none' }}>8sk23n4</span>
                {email[5]}
                <span style={{ display: 'none' }}>8sk23n4</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
