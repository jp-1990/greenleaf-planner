/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const navItem = (props) => {
  const scrollHandler = (scroll) => {
    window.scroll({
      left: 0,
      top: document.getElementById(scroll).offsetTop - 47,
      behavior: 'smooth',
    });
    if (props.menuFunc) props.menuFunc('closed');
  };
  return (
    <li
      style={{ listStyle: 'none' }}
      onClick={() => scrollHandler(props.scroll)}
      className={props.class}
    >
      <a> {props.children}</a>
    </li>
  );
};

export default navItem;
