import React from 'react';
import './Activities.css'

const Activities = ({ activity, handleExcerciseTime }) => {
    const { name, picture, time } = activity;
    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <div className='activity-item'>
                <h3>{name}</h3>
                <h5>{time}H</h5>
            </div>

            <button onClick={() => handleExcerciseTime(activity)} className='btn-list' type='submit'><p>Add to list</p></button>
        </div>
    );
};

export default Activities;