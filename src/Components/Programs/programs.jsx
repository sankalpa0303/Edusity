import React from 'react';
import './Programs.css';

import program1 from '../../assets/programs1.png';
import program2 from '../../assets/programs2.png';
import program3 from '../../assets/program33.png';

import programicon1 from '../../assets/programicon1.png';
import programicon2 from '../../assets/programicon2.png';
import programicon3 from '../../assets/programicon3.png';

const Programs = () => {
  return (
    <div className='programs-container' id=''>

      <div className='program'>
        <img src={program1} alt="Program 1" />
        <div className="caption">
            <img src={programicon1} alt=""/>
            <p>Graduation Degree</p>
        </div>
      </div>

      <div className='program'>
        <img src={program2} alt="Program 2" />
        <div className="caption">
            <img src={programicon2} alt=""/>
            <p>Master Degree</p>
        </div>
      </div>

      <div className='program'>
        <img src={program3} alt="Program 3" />
        <div className="caption">
            <img src={programicon3} alt=""/>
            <p>Post Graduation</p>
        </div>
      </div>

    </div>
  );
};

export default Programs;
