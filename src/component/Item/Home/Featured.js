import React from 'react';
import faluda from './../../../img/faluda.png'
import cream from './../../../img/cream.png'
import milk from './../../../img/milk.png'
import chocolate from './../../../img/chocolate.png'

const Featured = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold head-p  py-12'>Featured Items</h1>
                <p className=' head-two'>Quality & Passion</p>
                <p className=' head-two'><span>With Our Items</span></p>
            </div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={faluda} class="max-w-lg" alt='' />
                    <div>
                        <h1 class="text-5xl head-two font-bold">The Vanilla Bean </h1>
                        <span className='text-5xl font-bold'>Cone Ice Creams</span>
                        <br />

                        <div className='flex justify-around align-center p-5'>
                            <div>
                                <p className=' text-3xl font-bold '>Ingredient</p>
                            </div>
                            <div className='flex'>

                                <div>
                                    <img src={cream} alt="" />
                                </div>
                                <div className='px-2 font-bold'>Cream</div>
                            </div>
                            <div className='flex'>

                                <div>
                                    <img src={milk} alt="" />
                                </div>
                                <div className='px-2 font-bold'>Milk</div>
                            </div>
                            <div className='flex'>

                                <div>
                                    <img src={chocolate} alt="" />
                                </div>
                                <div className='px-2 font-bold'>Chocolate</div>
                            </div>


                        </div>
                        <p class="py-2">
                            On hot, sunny days, one of the first ideas that pops into someone’s head is: “This is a great day for ice cream!”
                            Even though every day is a good day for ice cream, summertime is definitely peak season.</p>

                        <div className='flex justify-around align-center py-5'>
                            <div>
                                <p className=' text-xl font-bold '>Price : <span>$ 50.50</span></p>
                            </div>
                            <div className='flex'>

                                <div>
                                    <p className=' text-sm font-bold '><span className='text-2xl'>5<i class="fa-solid fa-star text-sm"></i></span> Rating</p>
                                </div>

                            </div>
                            <div className='flex'>

                                <button class="btn btn-primary w-60 text-white">Order Now</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;