import React from 'react';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import profileImage from '../../imagese/Hanif.JPG';
import './ProfileInfo.css'


const ProfileInfo = () => {
    return (
        <div>
            <div className='profileInformation'>
            <img src={profileImage} alt="" className='profileImage' />
           
            <div className='addressInformation'>
            <h3>Abu Hanif</h3>
            <div className='address'>
            <FontAwesomeIcon icon={faLocation}/>
            <address>Dhaka,Savar</address>
            </div>
            
            </div>
            
            </div>
            <div className='profileDescription'>
                <div className='weight'>
                    <h3>75<span>kg</span></h3>
                    <h3>Weight</h3>
                </div>
                <div className='weight'>
                      <h3>5.6</h3>
                    <h3>Height</h3>
                </div>
                <div className='height'>
                    <h3>27<span>yrs</span></h3>
                    <h3>Age</h3>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;