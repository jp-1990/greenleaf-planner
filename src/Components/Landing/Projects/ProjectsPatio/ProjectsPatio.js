import React from 'react';
import classes from './ProjectsPatio.module.scss';

const ProjectsPatio = () => {
  return (
    <section className={classes.projects} id='projects'>
      <div className='container'>
        <div className='row'>
          <div className={`${classes.intro} col s12 m10 offset-m1`}>
            <h2>Projects</h2>
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
      <div className={classes.patio}>
        <div className={classes.row1}>
          <img
            className={classes.catlow}
            src={
              require('../../../../assets/images/projects/catlow.jpg').default
            }
            alt='Full garden design'
            height='300px'
            width='450px'
          />
        </div>
        <div className={classes.row2}>
          <img
            className={classes.rackham}
            src={
              require('../../../../assets/images/projects/rackham.jpg').default
            }
            alt='Sleeper work with ornamental stone'
            height='450px'
            width='450px'
          />
          <img
            className={classes.patient}
            src={
              require('../../../../assets/images/projects/patient.jpg').default
            }
            alt='Patio and pagoda'
            height='300px'
            width='450px'
          />
          <img
            className={classes.richmond}
            src={
              require('../../../../assets/images/projects/richmond.jpg').default
            }
            alt='Rustic sleeper steps'
            height='450px'
            width='450px'
          />
        </div>
        <div className={classes.row3}>
          <img
            className={classes.trafalgar}
            src={
              require('../../../../assets/images/projects/trafalgar.jpg')
                .default
            }
            alt='Turfing'
            height='300px'
            width='600px'
          />
          <img
            className={classes.mears}
            src={
              require('../../../../assets/images/projects/mears.jpg').default
            }
            alt='Fencing'
            height='450px'
            width='300px'
          />
          <img
            className={classes.unknown}
            src={
              require('../../../../assets/images/projects/unknown.jpg').default
            }
            alt='Ornmental stone'
            height='450px'
            width='450px'
          />
        </div>
        <div className={classes.row4}>
          <img
            className={classes.catlow2}
            src={
              require('../../../../assets/images/projects/catlow2.jpg').default
            }
            alt='Block pavers'
            height='450px'
            width='300px'
          />
          <img
            className={classes.paul2}
            src={
              require('../../../../assets/images/projects/paul2.jpg').default
            }
            alt='Decking'
            height='450px'
            width='450px'
          />
          <img
            className={classes.masters}
            src={
              require('../../../../assets/images/projects/masters.jpg').default
            }
            alt='Ornmental stone and sleeper beds'
            height='300px'
            width='600px'
          />
        </div>
        <div className={classes.row5}>
          <img
            className={classes.sharples}
            src={
              require('../../../../assets/images/projects/sharples.jpg').default
            }
            alt='Fosil sandstone patio with fencing'
            height='300px'
            width='600px'
          />
          <img
            className={classes.hampton}
            src={
              require('../../../../assets/images/projects/hampton.jpg').default
            }
            alt='Ornamental stone with flint-outlined borders'
            height='450px'
            width='300px'
          />
          <img
            className={classes.paul}
            src={require('../../../../assets/images/projects/paul.jpg').default}
            alt='Patio with trellis and turfing'
            height='300px'
            width='600px'
          />
        </div>
        <div className={classes.row6}>
          <img
            className={classes.dalzell}
            src={
              require('../../../../assets/images/projects/dalzell.jpg').default
            }
            alt='Basic sleeper beds'
            height='300px'
            width='450px'
          />
          <img
            className={classes.hamilton}
            src={
              require('../../../../assets/images/projects/hamilton.jpg').default
            }
            alt='Basic patio'
            height='300px'
            width='450px'
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPatio;
