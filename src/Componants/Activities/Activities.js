import React from 'react';
import './Activities.css'

const Activities = ({ datas }) => {
    const { name, picture, time } = datas;
    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <div className='activity-item'>
                <h3>{name}</h3>
                <h5>{time}H</h5>
            </div>
            <button className='btn-list' type='submit'><p>Add to list</p></button>
        </div>
    );
};

export default Activities;