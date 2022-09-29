import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Cart from '../Cart/Cart';
import Nav from '../Nav/Nav';
import './Main.css'
const Main = () => {
    const [activities, setActivity] = useState([]);
    const [cart, setCart] = useState([]);
    const [breaks, SetBreaks] = useState([])

    // const [break, setBreak] = useState(0)
    useEffect(() => {
        fetch('routine.json')
            .then(res => res.json())
            .then(data => setActivity(data))
    }, []);
    // const buttonFunction = (butttonId) => {
    //     console.log(butttonId);
    //     const newTime = break;
    //     setBreak(butttonId)
    // }
    const handleExcerciseTime = (activity) => {
        console.log(activity)
        const newCart = [...cart, activity]
        setCart(newCart)
    }
    const handleBreak = (breakTime) => {
        let newTime = [...breaks, breakTime]
        SetBreaks(newTime)
    }
    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
            {/* <div className='full-container'> */}
            < div className='full-body'>
                <div className='activity-side'>

                    {
                        activities.map(activity =>
                            <Activities
                                activity={activity}
                                key={activity.id}
                                handleExcerciseTime={handleExcerciseTime}
                            ></Activities>)
                    }
                </div>
                <div className='timing-side'>
                    <Cart cart={cart}
                        handleBreak={handleBreak}
                        buttonValue={breaks}>
                    </Cart>
                </div>
            </div >
        </div>
        // </div>
    );
};

export default Main;