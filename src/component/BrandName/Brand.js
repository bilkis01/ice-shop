import React from 'react';
import brandOne from '././../../img/brandOne.png'
import brandtwo from '././../../img/brandtwo.png'
import brandthree from '././../../img/brandthree.png'
import brandfour from '././../../img/brandfour.png'

const Brand = () => {
    return (
        <div className='flex justify-between px-24 pb-24'>
            <div>
                <img src={brandOne} alt="" />
            </div>
            <div>
                <img src={brandtwo} alt="" />
            </div>
            <div>
                <img src={brandthree} alt="" />
            </div>
            <div>
                <img src={brandfour} alt="" />
            </div>
            <div>
                <img src={brandOne} alt="" />
            </div>
            
        </div>
    );
};

export default Brand;