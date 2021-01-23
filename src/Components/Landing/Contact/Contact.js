import React from 'react';
import classes from './Contact.module.scss';

const Contact = () => {
  const email = ['greenleaf', 'garden', 'ing', '@', 'gmail', '.com'];
  return (
    <section className={classes.contact} id='contact'>
      <div className='container'>
        <div className='row'>
          <div className={`${classes.intro} col s12 m10 offset-m1`}>
            <h2>Contact</h2>
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
          <div className={`col s12 m8 offset-m2 ${classes.details}`}>
            <h4>Speak to James</h4>
            <ul>
              <li>07789 314750</li>
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
