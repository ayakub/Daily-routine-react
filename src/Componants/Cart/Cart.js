import React from 'react';
import './Cart.css'
import Logo from '../pic/pic.jpg'

const Cart = ({ cart }) => {
    let excerciseTime = 0;
    for (const activity of cart) {
        excerciseTime = excerciseTime + activity.time
    }
    return (
        <div className='cart'>
            <div className='my-data-1'>
                <img src={Logo} alt="" />
                <h5>Md. Ayakub Ali</h5>
            </div>
            <div className='my-data-2'>
                <h3>75kg</h3>
                <h3>5.6</h3>
                <h3>21Years</h3>
            </div>
            <div className='my-data-3'>
                <h5>Weight</h5>
                <h5>Height</h5>
                <h5>Age</h5>
            </div>
            <h4>Add a break</h4>
            <div className='second-btn'>
                <button>2H</button>
                <button>1H</button>
                <button>0.5H</button>
                <button>1.5H</button>
            </div>
            <div>
                <h3>Excercise Details</h3>
                <p>Excercise Time: <span className='excercise-time'>{excerciseTime.toFixed(2)}H</span></p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cart;