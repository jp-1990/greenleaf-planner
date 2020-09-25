/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const navItem = (props) => {
  const scrollHandler = (scroll) => {
    window.scroll({
      left: 0,
      top: document.getElementById(scroll).offsetTop - 43,
      behavior: 'smooth',
    });
  };
  return (
    <li
      style={{ listStyle: 'none' }}
      onClick={() => scrollHandler(props.scroll)}
    >
      <a className={props.class}>{props.children}</a>
    </li>
  );
};

export default navItem;
