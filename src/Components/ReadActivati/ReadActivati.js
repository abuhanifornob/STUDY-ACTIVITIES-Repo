import { faAdd, faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReadActivati.css'
const ReadActivati = ({active,clickHandelar}) => {
    const{img,name,time}=active;
    console.log(clickHandelar);
    return (
        <div className='day-reading'>
            <img src={img} alt=""  style={{width:"200px",height:"200px"}}/>
            <div className='active-information'>
            <p>{name}</p>
            <p>Time required : {time} Minits</p>
            </div>
            
            <button className='active-btn' onClick={()=>clickHandelar(time)}>
                <p>Add to lis</p> 
                <FontAwesomeIcon icon={faAdjust}/>
                </button>


        </div>
    );
};

export default ReadActivati;