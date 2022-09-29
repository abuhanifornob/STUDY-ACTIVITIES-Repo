
import React, { useState } from 'react';

import './ActivitiCalculation.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActivitiCalculation = (props) => {

    const notify = () => toast.success('🦄 Wow Successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });


    return (
        <div>
         <h2 className='studyDetails'>Study Details</h2>
                 <p className='studyTime'>Study Time :{props.time}  Minutes</p>
                 <p className='break'>Break Time : 20 Minutes</p>

                <button className='activityBtn' onClick={notify}>Activity Completed</button> 
                <ToastContainer /> 
         
        </div>
    );
};

export default ActivitiCalculation;