import React from 'react';
import classes from './ProjectsPatio.module.scss';

const ProjectsPatio = () => {
  return (
    <section className={classes.projects} id='projects'>
      <div className='container'>
        <div className='row'>
          <div className={`${classes.intro} col s10 offset-s1`}>
            <h2>Projects</h2>
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
      <div className={classes.patio}>
        <div className={classes.row1}>
          <img
            className={classes.catlow}
            src={require('../../../../assets/images/projects/catlow.jpg')}
            alt='Full garden design'
            height='300px'
            width='450px'
          />
        </div>
        <div className={classes.row2}>
          <img
            className={classes.rackham}
            src={require('../../../../assets/images/projects/rackham.jpg')}
            alt='Sleeper work with ornamental stone'
            height='450px'
            width='450px'
          />
          <img
            className={classes.patient}
            src={require('../../../../assets/images/projects/patient.jpg')}
            alt='Patio and pagoda'
            height='300px'
            width='450px'
          />
          <img
            className={classes.richmond}
            src={require('../../../../assets/images/projects/richmond.jpg')}
            alt='Rustic sleeper steps'
            height='450px'
            width='450px'
          />
        </div>
        <div className={classes.row3}>
          <img
            className={classes.trafalgar}
            src={require('../../../../assets/images/projects/trafalgar.jpg')}
            alt='Turfing'
            height='300px'
            width='600px'
          />
          <img
            className={classes.mears}
            src={require('../../../../assets/images/projects/mears.jpg')}
            alt='Fencing'
            height='450px'
            width='300px'
          />
          <img
            className={classes.unknown}
            src={require('../../../../assets/images/projects/unknown.jpg')}
            alt='Ornmental stone'
            height='450px'
            width='450px'
          />
        </div>
        <div className={classes.row4}>
          <img
            className={classes.catlow2}
            src={require('../../../../assets/images/projects/catlow2.jpg')}
            alt='Block pavers'
            height='450px'
            width='300px'
          />
          <img
            className={classes.paul2}
            src={require('../../../../assets/images/projects/paul2.jpg')}
            alt='Decking'
            height='450px'
            width='450px'
          />
          <img
            className={classes.masters}
            src={require('../../../../assets/images/projects/masters.jpg')}
            alt='Ornmental stone and sleeper beds'
            height='300px'
            width='600px'
          />
        </div>
        <div className={classes.row5}>
          <img
            className={classes.sharples}
            src={require('../../../../assets/images/projects/sharples.jpg')}
            alt='Fosil sandstone patio with fencing'
            height='300px'
            width='600px'
          />
          <img
            className={classes.hampton}
            src={require('../../../../assets/images/projects/hampton.jpg')}
            alt='Ornamental stone with flint-outlined borders'
            height='450px'
            width='300px'
          />
          <img
            className={classes.paul}
            src={require('../../../../assets/images/projects/paul.jpg')}
            alt='Patio with trellis and turfing'
            height='300px'
            width='600px'
          />
        </div>
        <div className={classes.row6}>
          <img
            className={classes.dalzell}
            src={require('../../../../assets/images/projects/dalzell.jpg')}
            alt='Basic sleeper beds'
            height='300px'
            width='450px'
          />
          <img
            className={classes.hamilton}
            src={require('../../../../assets/images/projects/hamilton.jpg')}
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
