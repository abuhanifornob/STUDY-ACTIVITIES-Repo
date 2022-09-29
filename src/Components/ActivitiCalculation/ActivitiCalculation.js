
import React, { useState } from 'react';

import './ActivitiCalculation.css'

const ActivitiCalculation = (props) => {
  

    return (
        <div>
         <h2 className='studyDetails'>Study Details</h2>
                 <p className='studyTime'>Study Time :{props.time}  Minutes</p>
                 <p className='break'>Break Time :  Minutes</p>

                <button className='activityBtn'>Activity Completed</button>  
         
        </div>
    );
};

export default ActivitiCalculation;