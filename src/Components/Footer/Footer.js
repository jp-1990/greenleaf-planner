import React from 'react';
import './Footer.module.scss';

const Footer = () => {
  const address = () => {
    return (
      <p className='grey-text text-lighten-4'>
        18 Smith Street <br /> Aylsham <br /> NR54 9XQ
      </p>
    );
  };

  const contact = () => {
    return (
      <p className='grey-text text-lighten-4'>
        01263 515673 <br /> lowthers@gmail.com
      </p>
    );
  };

  return (
    <footer className='page-footer green darken-4'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>Lowthers Gardening Services Ltd.</h5>
            {address()}
            {contact()}
          </div>
          <div className='col l4 offset-l2 s12'>
            <ul>
              <li>
                <a className='grey-text text-lighten-3' href='#!'>
                  <ion-icon name='logo-facebook'></ion-icon>
                </a>
              </li>
              <li>
                <a className='grey-text text-lighten-3' href='#!'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>
              <li>
                <a className='grey-text text-lighten-3' href='#!'>
                  <ion-icon name='logo-linkedin'></ion-icon>
                </a>
              </li>
              <li>
                <a className='grey-text text-lighten-3' href='#!'>
                  <ion-icon name='logo-twitter'></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>© 2020 J.Plummer. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
