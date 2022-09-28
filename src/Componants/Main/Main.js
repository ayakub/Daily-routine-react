import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Cart from '../Cart/Cart';
import Nav from '../Nav/Nav';
import './Main.css'
const Main = () => {
    const [activities, setActivity] = useState([]);
    useEffect(() => {
        fetch('routine.json')
            .then(res => res.json())
            .then(data => setActivity(data))
    }, [])
    return (

        <div>
            <Nav></Nav>
            < div className='full-body' >
                <div className='activity-side'>

                    {
                        activities.map(activity =>
                            <Activities datas={activity}
                                key={activity.id}
                            ></Activities>)
                    }
                </div>
                <div className='timing-side'>
                    <Cart></Cart>
                </div>
            </div >
        </div>
    );
};

export default Main;