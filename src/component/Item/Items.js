import React from 'react';
import './Global.css';
import butter from '../../img/butter.png'
import shop from './../../img/shop.jpg';



const Items = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
            <section id="product1">

                <div class="pro-container">
                    <div class="pro">
                        <img src={butter} alt="" />
                        <div class="des">
                            <img src="" alt="" />
                            <span>adidas</span>
                            <h4>$78</h4>
                            <div>
                                <img src={shop} className="cart" alt="shop cart" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Items;