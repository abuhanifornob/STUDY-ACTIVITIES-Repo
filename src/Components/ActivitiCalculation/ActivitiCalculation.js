
import React from 'react';
import Break from '../Break/Break';

import ProfileInfo from '../ProfileInfo/ProfileInfo';

import './ActivitiCalculation.css'

const ActivitiCalculation = (props) => {

    console.log(props)

    return (
        <div>
           <ProfileInfo></ProfileInfo>
           <Break></Break>
           <h2 className='studyDetails'>Study Details</h2>
                
                 <p className='studyTime'>Study Time :{props.time}  Minutes</p>
                 <p className='break'>Break Time :  Minutes</p>

                <button className='activityBtn'>Activity Completed</button>  
         
        </div>
    );
};

export default ActivitiCalculation;