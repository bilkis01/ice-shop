import React from 'react';
import color from './../../../img/color.jpg'
import pink from './../../../img/pink.jpg'
import butters from './../../../img/butters.jpg'
import cube from './../../../img/cube.jpg'

const Gallery = () => {
    return (

        <div class="card card-compact w-96  px-14 py-12 '">

            <div className='flex justify-between align-center gap-12 ' >
                <img src={color} alt="Shoes" />
                <img src={pink} alt="Shoes" />
                <img src={cube} alt="Shoes" />
                <img src={butters} alt="Shoes" />

            </div>
        </div  >




    );
};

export default Gallery;