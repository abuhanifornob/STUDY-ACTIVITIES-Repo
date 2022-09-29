import React, { useEffect, useState } from 'react';
import ActivitiCalculation from '../ActivitiCalculation/ActivitiCalculation';

import Header from '../Header/Header';
import ReadActivati from '../ReadActivati/ReadActivati';
import './Reading.css'
const Reading = () => {
     const [activity,setActivity]=useState([]);
     const [minute,setMinute]=useState(0);

     useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setActivity(data));

     },[])
    
     const clickHandelar=(time)=>{
        
        const newTime=minute +parseInt(time);
        setMinute(newTime)
        
     }
     console.log(minute);

    return (
        <div className='read-container'>
            <div className="reading-container">
                <Header></Header>
             <div className='active-container'>
             {
                activity.map(active=><ReadActivati 
                    active={active}
                    clickHandelar={clickHandelar}
                
                ></ReadActivati>)
             }</div>   
             

            </div>
            <div className="reading-activatice-container">
                  
                <ActivitiCalculation time={minute}></ActivitiCalculation>
                  
            
            </div>
        </div>
    );
};

export default Reading;