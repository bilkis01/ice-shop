import React from 'react';
import about from '../../../img/about.png'
import icon from './../../../img/icon.png'
import branch from './../../../img/branch.png'
import man from './../../../img/man.png'
import icy from './../../../img/icy.png'
import girl from './../../../img/girl.png'
import './../Global.css'

const BannerTwo = () => {
    return (
        <div>

            <div class="hero min-h-screen mt-8 bg">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={about} class="max-w-md bannner-img " />
                    <div className='px-24'>
                        <h1 class="text-5xl font-bold head-p">About Us</h1>
                        <p class=" head-two">Yammy Ice Cream</p>
                        <p class=" head-two"><span>Enriches Your Life</span></p>
                        <p>Food Khan is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon's Exmouth Market.</p>
                       
                       <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-6'>
                        <div className='flex '>
                           <div>
                           <img src={icon} alt="" />
                           </div>
                           <div className='px-2'>
                            <h4 className='text-md fw-bold'>2000</h4>
                            <p>sunnyville creamery</p>
                           </div>
                        </div>
                        <div className='flex '>
                           <div>
                           <img src={branch} alt="" />
                           </div>
                           <div className='px-2'>
                            <h4 className='text-md fw-bold'>500</h4>
                            <p>Branch office</p>
                           </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                            <img src={man} alt="" />
                            <img src={icy} alt="" />
                            <img src={girl} alt="" />
                        </div>

                       </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BannerTwo;