import React from 'react'; 
import './Break.css'

const Break = () => {
    return (
        <div className='breakTime'>
            <h2>Add A Break</h2>
            <div className='time'>
                <button className='break-btn'> <span className='minutes'>10</span>M</button>
                <button className='break-btn'> <span className='minutes'>20</span>M</button>
                <button className='break-btn'> <span className='minutes'>30</span>M</button>
                <button className='break-btn'> <span className='minutes'>40</span>M</button>
            </div>
        </div>
    );
};

export default Break;