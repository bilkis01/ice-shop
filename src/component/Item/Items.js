import React from 'react';
import './Global.css';
import butter from '../../img/butter.png'
import shop from './../../img/shop.jpg';



const Items = ({ product}) => {

    const { id, asset, name, price } = product;

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                <section id="product1">

                    <div class="pro-container">
                        <div class="pro">
                            <img src={asset} alt="" />
                            <div class="des">
                                <img src="" alt="" />
                                <span>{name}</span>
                                <h4>{price}</h4>
                                <div>
                                    <img src={shop} className="cart" alt="shop cart" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Items;

