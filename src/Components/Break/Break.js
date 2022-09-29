import React from 'react'; 
import './Break.css'

const Break = ({breakTime}) => {

    return (
        <div className='breakTime'>
            <h2>Add A Break</h2>
            <div className='time'>
                <button className='break-btn' onClick={()=>breakTime(10)}> <span className='minutes'>10</span>M</button>
                <button className='break-btn' onClick={()=>breakTime(20)}> <span className='minutes'>20</span>M</button>
                <button className='break-btn' onClick={()=>breakTime(30)}> <span className='minutes'>30</span>M</button>
                <button className='break-btn' onClick={()=>breakTime(40)}> <span className='minutes'>40</span>M</button>
            </div>
        </div>
    );
};

export default Break;