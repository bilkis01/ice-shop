import React from 'react';
import ice from './../../../img/ice.png';
import './../Global.css'

const Banner = () => {
    return (
        <div class="hero min-h-screen px-12">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={ice} class="max-w-lg  " />
                <div>
                    <h1 class="text-5xl font-bold head-three">Ice Cream </h1>
                    <h2 className='head-two'>That
                        Enriches <br /> Your Life</h2>
                    <p class="py-6">
                        Christmas is coming! Get your gifts sorted early, then you can sit back and enjoy some festive beers for yourself!
                    </p>

                    <h3 className='text-md fw-bold'>Price : <span>$ 50.50</span></h3>
                    <br />
                    <button class="btn btn-primary text-white">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;