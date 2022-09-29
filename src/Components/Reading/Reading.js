import React, { useEffect, useState } from 'react';
import ActivitiCalculation from '../ActivitiCalculation/ActivitiCalculation';
import Break from '../Break/Break';

import Header from '../Header/Header';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ReadActivati from '../ReadActivati/ReadActivati';
import './Reading.css'
const Reading = () => {
     const [activity,setActivity]=useState([]);
     const [minute,setMinute]=useState(0);

     const[breakTimes,setBreakTimes]=useState(0);
   

     useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setActivity(data));

     },[])
    
     const clickHandelar=(time)=>{
        
        const newTime=minute +parseInt(time);
        setMinute(newTime)
        
     }


     const breakTime=(breakTimes)=>{
        const newBreakTime=breakTime;
        setBreakTimes(newBreakTime);
    }
   console.log(breakTimes);
    return (
        <div className='read-container'>
            <div className="reading-container">
                <Header></Header>
                <h1 style={{color:"cornflowerblue"}}>Selected Day Study Method</h1>
             <div className='active-container'>
             {
                activity.map(active=><ReadActivati 
                    active={active}
                    clickHandelar={clickHandelar}
                
                ></ReadActivati>)
             }</div>   
             

            </div>
            <div className="reading-activatice-container">
                <ProfileInfo></ProfileInfo>
                <Break breakTime={breakTime}></Break>
                <ActivitiCalculation time={minute}></ActivitiCalculation>
               
                  
            
            </div>
        </div>
    );
};

export default Reading;