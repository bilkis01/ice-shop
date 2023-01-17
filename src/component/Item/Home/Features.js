import React from 'react';
import coco from './../../../img/coco.png'
import strw from './../../../img/strw.png'
import flo from './../../../img/flo.png'
import chocolate from './../../../img/chocolate.png'

const Features = () => {
    return (
        <div>
            <div class="hero min-h-screen px-12">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={coco} class="max-w-lg" />
                    <div className='px-12'>
                        <h1 class="text-5xl font-bold">Chocolate S'mores Core Ice Creams</h1>
                        <br />
                        <div className='flex justify-around align-center p-5'>
                            <div>
                                <p className=' text-3xl font-bold '>Ingredient</p>
                            </div>
                            <div className='flex'>

                                <div>
                                    <img src={strw} alt="" />
                                </div>
                                <div className='px-2 font-bold'>Cream</div>
                            </div>
                            <div className='flex'>

                                <div>
                                    <img src={flo} alt="" />
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
                  <p className='py-4'>

                  On hot, sunny days, one of the first ideas that pops into someone’s head is: “This is a great day for ice cream!” Even though every day is a good day for ice cream, summertime is definitely peak season.
                  </p>
                        
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

export default Features;