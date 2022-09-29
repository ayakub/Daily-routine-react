import React from 'react';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWalking } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <div className='nav-container'>
            <h2><FontAwesomeIcon icon={faWalking}></FontAwesomeIcon> Everydays Activities</h2>
            <h4>Select's Your Activities</h4>
        </div>
    );
};

export default Nav;