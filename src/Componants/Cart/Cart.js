import React from 'react';
import './Cart.css'
import Logo from '../pic/pic.jpg'

const Cart = () => {
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
                <button>30M</button>
                <button>40M</button>
                <button>1.5H</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cart;